/*
 * Arquivo userController referente aos controllers da rota de usuários
 * 					Autor: Thiago Pereira
 */

// Importando o Request e Response do express

import { Request, Response } from "express";

// Importando o prisma client

import { prisma } from "../utils/prisma";

// Importando a interface IDeptEmp para informar os datatypes

import { IDeptEmp } from "../utils/interfaces";

// Importando o moment para manipular as datas do código

import moment from "moment";

// Exportando os controllers para a rota

export default {

	// Rota de POST/CREATE
	async createDeptEmployee(req: Request, res: Response) {

		/*
			Rota de registro da tabela de junção dept-employee
			Requer o guid_dept e o guid_employee já inseridos no params
			Formato da rota: "dept-employees/add/:guid_dept/:guid_employee"
			Formato aceito dos dados em JSON:
	 		{
				"from_date":"DD-MM-YYYY",
				"to_date":"DD-MM-YYYY",
			}
		*/

		try {

			// Recebendo os guids do params
			const { guid_dept, guid_employee } = req.params;

			// Checando a existencia desses guids de departamentos e funcionários
			const deptGuid = await prisma.departments.findUnique({
				where: {
					guid_dept,
				},
			});
			const empGuid = await prisma.employees.findUnique({
				where: {
					guid_employee,
				},
			});
			// Em caso de não receber os Guids, retorna uma mensagem de erro
			if (!deptGuid || !empGuid) {
				res.status(400).json({ erro: "GUIDs de departamentos e funcionários obrigatorios" });
				return;
			};
			// Recebendo os dados do body
			const { from_date, to_date }: IDeptEmp = req.body;
			// Checando o recebimento dos dados do body
			if(!from_date || !to_date){
				res.status(400).json({erro:"As datas de início e de término são obrigatórias"});
				return;
			};

			// Configurando o moment para manipular as datas
			moment(from_date, to_date, "DD-MM-YYYY").format();
			
			// Configurando o prisma para criar os dados
			const deptEmpReg = await prisma.dept_emp.create({
				data: {
					dept_guid: guid_dept,
					emp_guid: guid_employee,
					from_date: from_date,
					to_date: to_date,
				},
				include: {
					departments: true,
					employee: true,
				},
			});
			// Resposta retorna os dados registrados + os dados de dept e funcionários
			res.status(201).json(deptEmpReg);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST
	async findAllDeptEmployees(req: Request, res: Response) {

		/*
			Rota de request da tabela de junção dept-employee
			Formato da rota: "/dept-employees/request"
		*/

		try {
			// Configurando o prisma para buscar todos os dados da tabela
			const deptEmpReq = await prisma.dept_emp.findMany();
			// Resposta retorna os dados da tabela
			res.status(200).json(deptEmpReq);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST filtrando pelo guid
	async findDeptEmployee(req: Request, res: Response) {
		/* 
			Rota de GET/REQUEST pelo GUID retornando um registro
			Formato do request requer o GUID
			Formato guid_role_perm = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Formato da rota: "/dept-employees/request/:guid_dept_emp"
		*/

		try {
			// Recebendo o GUID dos params
			const guid_dept_emp = req.params.guid_dept_emp;

			// Validação da recepção do GUID
			if (!guid_dept_emp) {
				res.status(400).json({ erro: "O GUID é obrigatorio" });
				return;
			};
			// Checando a existencia desse GUID
			const checkDeptEmpId = await prisma.dept_emp.findUnique({
				where: {
					guid_dept_emp,
				},
			});
			// Caso não exista retorna uma mensagem de erro
			if (!checkDeptEmpId) {
				res.status(404).json( {message: "GUID de departamentos_funcionarios não existe"} );
				return;
			};
			// Configurando o prisma para retornar o dado pelo GUID
			const deptEmpReqId = await prisma.dept_emp.findUnique({
				where: {
					guid_dept_emp: guid_dept_emp,
				},
			});
			// Resposta retorna o dado solicitado
			res.status(200).json(deptEmpReqId);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de PATCH/UPDATE
	async updateDeptEmployee(req: Request, res: Response) {

		/*
			Rota de registro da tabela de junção dept-employee
			Requer o guid_dept e o guid_employee já inseridos no params
			Formato da rota: "/dept-employees/update/:guid_dept_emp/:guid_dept/:guid_employee"
			Formato aceito dos dados em JSON:
	 		{
				"from_date":"DD-MM-YYYY",
				"to_date":"DD-MM-YYYY",
			}
		*/

		try {
			// Recebendo o GUID dos params
			const { guid_dept_emp } = req.params;

			// Validação da recepção do GUID
			if (!guid_dept_emp) {
				res.status(400).json({ erro: "O GUID é obrigatorio" });
				return;
			};

			// Checando se o GUID existe
			const checkDeptEmpGuid = await prisma.dept_emp.findUnique({
				where: {
					guid_dept_emp,
				},
			});

			// Caso o guid não exista, retorna uma mensagem de erro
			if (!checkDeptEmpGuid) {
				res.status(404).json({ erro: "GUID de departamentos_funcionarios não encontrado" });
				return;
			};

			// Recebendo os guids de permissão e função do params
			const { guid_dept, guid_employee } = req.params;

			// Validando se os guids existem
			const deptGuid = await prisma.departments.findUnique({
				where: {
					guid_dept,
				},
			});
			const empGuid = await prisma.employees.findUnique({
				where: {
					guid_employee,
				},
			});
			// Caso não existam, retorna uma mensagem de erro
			if (!deptGuid) {
				res.status(400).json({ erro: "GUID do departamento obrigatorio" });
				return;
			};
			if (!empGuid) {
				res.status(400).json({ erro: "GUID dos funcionários obrigatorio" });
				return;
			};

			// Recebendo os dados do body
			const { from_date, to_date }: IDeptEmp = req.body;
			
			// Checando o recebimento dos dados do body
			if(!from_date || !to_date){
				res.status(400).json({erro:"As datas de início e de término são obrigatórias"});
				return;
			};

			// Configurando o moment para manipular as datas
			moment(from_date, to_date, "DD-MM-YYYY").format();

			// Configurando o prisma para atualizar os dados da tabela
			const deptEmpUpdt = await prisma.dept_emp.update({
				where: {
					guid_dept_emp: guid_dept_emp,
				},
				data: {
					dept_guid: guid_dept,
					emp_guid: guid_employee,
					from_date: from_date,
					to_date: to_date,
				},
			});
			// Resposta retorna os dados atualizados
			res.status(201).json(deptEmpUpdt);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de DELETE
	async deleteDeptEmployee(req: Request, res: Response) {

		/*
			Rota de DELETE dos registros 
			Requer o GUID para deletar
			Formato guid_dept_emp = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Exemplo da rota: "/dept-employees/delete/:guid_dept_emp"
		*/

		try {

			// Recebendo o GUID dos params
			const { guid_dept_emp } = req.params;

			// Validação da recepção do GUID
			if (!guid_dept_emp) {
				res.status(400).json({ erro: "O GUID é obrigatorio" });
				return;
			};

			// Configurando o prisma para checar se o dado existe
			const checkDeptEmpGuid = await prisma.dept_emp.findUnique({
				where: {
					guid_dept_emp,
				},
			});
			// Caso não exista retorna uma mensagem de erro
			if (!checkDeptEmpGuid) {
				res.status(404).json({ erro: "GUID de departamentos_funcionarios não encontrado" });
				return;
			};

			// Configurando o prisma para deletar os dados
			const deptEmpDel = await prisma.dept_emp.delete({
				where: {
					guid_dept_emp: guid_dept_emp,
				},
			});
			// Resposta retorna os dados deletados
			res.status(200).json(deptEmpDel);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},
};
