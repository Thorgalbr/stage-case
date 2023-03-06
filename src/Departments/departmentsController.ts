/*
 * Arquivo departmentsController referente aos controllers da rota da tabela de departamentos
 *					Autor: Thiago Pereira
 */

// Importando o Request e Response do express

import { Request, Response } from "express";

// Importando o prisma client e configurando

import { prisma } from "../utils/prisma";

// Exportando os controllers para a rota

export default {

	// Rota de POST/CREATE
	async createDepartment(req: Request, res: Response) {

		/*
			Rota de registro de departamentos
			Formato da rota: "/department/add"
	 		Formato aceito dos dados em JSON:
	 		{
				"deptName":"Exemplo",
			}
 
		*/

		try {
			// Recebendo o dado do body para registro
			const deptName: string = req.body;

			// Validação do dado recebido do body
			if(!deptName){
				res.status(422).json( { mensagem:"O nome do departamento é obrigatório" } );
			};

			// Checando se o departamento já existe
			const checkDeptName = await prisma.departments.findUnique({
				where: {
					deptName,
				},
			});
			// Se existir retorna uma mensagem de erro
			if (checkDeptName) {
				res.status(422).json({ erro: "Este departamento já existe!" });
			};

			// Configurando o prisma para efetuar o registro do departamento
			const deptReg = await prisma.departments.create({
				data: {
					deptName: deptName,
				},
			});
			// Resposta retorna o departamento cadastrado
			return res.status(201).json(deptReg);
		} catch (error) {
			// Caso falhe, retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST
	async findAllDepartments(req: Request, res: Response) {

	/*
		Rota de request de todos os usuários
		Formato da rota: "/departments/request"
	*/

		try {
			// Configurando o prisma para retornar todos os departamentos
			const deptReq = await prisma.departments.findMany();
			// Retorna em caso de sucesso a lista dos departamentos
			return res.status(200).json(deptReq);
		} catch (error) {
			// Caso falhe, retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST filtrando pelo GUID
	async findDepartment(req: Request, res: Response) {

	/* 
		Rota de GET/REQUEST pelo GUID retornando um registro
		Formato do request requer o GUID do departamento
		Formato guid_dept = "8d695e19-3422-4990-b70c-d3772efb9c38"
		Formato da rota: "/departments/request/:guid_dept"
	*/

		try {

			// Recebendo o GUID do departamento dos params
			const guid_dept = req.params.guid_dept;

			if(!guid_dept){
				res.status(422).json({erro:"GUID do Departamento não recebido"})
			};

			// Configurando o prisma para buscar o departamento pelo GUID
			const deptReqId = await prisma.departments.findUnique({
				where: {
					guid_dept: guid_dept,
				},
			});
			// Resposta retorna o departamento
			return res.status(200).json(deptReqId);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de PATCH/UPDATE
	async updateDepartment(req: Request, res: Response) {

		/*
			Rota de PATCH/UPDATE dos registros de departamentos
			Requer o GUID do departamento para atualização
			Formato da rota: "/departments/update/:guid_dept"
	 		Formato aceito dos dados em JSON:
	 		{
				"deptName":"Exemplo",
			}
 
		*/

		try {
			// Recebendo o GUID do departamento dos params
			const guid_dept = req.params.guid_dept;
			// Validando se o guid existe na requisição
			if (!guid_dept) {
				res.status(422).json({ erro: "GUID do departamento obrigatório" });
			};
			// Recebendo o dado do body para atualização
			const deptName: string = req.body;
			// Validando se o nome do departamento existe na requisição
			if (!deptName) {
				res.status(422).json({ erro: "O nome do departamento é obrigatório" });
			};
			// Checando se o departamento existe
			const checkDeptId = await prisma.departments.findUnique({
				where: {
					guid_dept,
				},
			});
			// Caso não exista retorna uma mensagem de erro
			if (!checkDeptId) {
				res.status(404).json({ erro: "Este departamento não existe!" });
			};

			// Configurando o prisma para atualizar o departamento
			const deptUpdt = await prisma.departments.update({
				where: {
					guid_dept: guid_dept,
				},
				data: {
					deptName: deptName,
				},
			});
			// Resposta retorna o departamento atualizado
			return res.status(201).json(deptUpdt);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de DELETE
	async deleteDepartment(req: Request, res: Response) {

		/*
			Rota de DELETE dos registros de departamentos
			Requer o GUID do departamento para deletar
			Formato guid_dept = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Exemplo da rota: "/departments/delete/:guid_dept"

		*/

		try {

			// Recebendo o GUID do usuario dos params
			const guid_dept = req.params.guid_dept;

			// Validação do dado recebido do params, retornando erro caso o GUID não seja inserido
			if (!guid_dept) {
				res.status(422).json({ erro: "GUID do Departamento obrigatório" });
			};
			// Checando se o departamento existe
			const checkDeptId = await prisma.departments.findUnique({
				where: {
					guid_dept,
				},
			});
			// Caso não exista, retorna uma mensagem de erro
			if (!checkDeptId) {
				res.status(404).json({ erro: "Este departamento não existe!" });
			};

			// Configurando o prisma para deletar o departamento
			const deptDel = await prisma.departments.delete({
				where: {
					guid_dept: guid_dept,
				},
			});
			// Resposta retorna o departamento deletado
			return res.status(200).json(deptDel);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},
};
