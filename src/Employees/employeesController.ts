/*
  	Arquivo employeesController referente aos controllers da rota da tabela de funcionários
 					Autor: Thiago Pereira	
 */

// Importando o Request e Response do express

import { Request, Response } from "express";

// Importando o prisma client

import { prisma } from "../utils/prisma";

// Importando a interface IEmployees para o controller

import { IEmployees } from "../utils/interfaces";

// Importando o moment para manipular datas no controller

import moment from "moment";

// Exportando os controllers para a rota

export default {

	// Rota de POST/CREATE
	async createEmployee(req: Request, res: Response) {

		/*
			Rota de registro de funcionários
			Requer o guid_user e guid_projects
			Formato da rota: "/employee/:guid_user/:guid_projects"
	 		Formato aceito dos dados em JSON:
	 		{
				"firstName":"Exemplo",
				"lastName":"Exemplo",
				"birthDate":"DD-MM-YYYY"
				"hire_date":"DD-MM-YYYY"
				"wage":2000.00
			}
 
		*/

		try {

			// Recebendo os guids do params
			const guid_user = req.params.guid_user;

			// Recebendo os guids do params
			const guid_projects = req.params.guid_projects;
			
			// Validando os dados do params
			if(!guid_user || !guid_projects){
				res.status(400).json({ error: "GUID de usuarios e projetos obrigatórios!" });
				return;
			};

			// Recebendo os dados do body para registro
			let { firstName, lastName, birthDate, hire_date, wage }: IEmployees = req.body;
			console.log(guid_user);
			// Validação dos dados vindos do body
			if(!firstName || !lastName){
				res.status(400).json({ error: "Nome e sobrenome obrigatórios!" });
				return;
			};

			if(!birthDate || !hire_date) {
				res.status(400).json({ error: "Datas de nascimento e contratação obrigatórias (DD-MM-YYYY)" });
				return;
			};

			if(!wage) {
				res.status(400).json({ error: "Salário obrigatório" });
				return;
			};

			// Configurando o prisma para buscar os guids de user e projeto
			const userReqId = await prisma.user.findUnique({
				where: {
					guid_user,
				},
			});
			const projReqId = await prisma.projects.findUnique({
				where: {
					guid_projects,
				},
			});

			// Validação do recebimento da guid, retorna erro se nao for recebido
			if (!userReqId || !projReqId) {
				res.status(404).json({ error: "GUIDs de usuário ou projeto inexistentes" });
				return;
			};

			// Configurando o moment para manipular as datas
			birthDate = moment(birthDate, "DD-MM-YYYY").format();
			hire_date = moment(hire_date, "DD-MM-YYYY").format();

			// Configurando o prisma para cadastrar o funcionário
			const emploReg = await prisma.employees.create({
				data: {
					firstName: firstName,
					lastName: lastName,
					birthDate: birthDate,
					hire_date: hire_date,
					wage: wage,
					user_guid: guid_user,
					projects_guid: guid_projects,
				    },
			});

			
			// Resposta retorna o funcionário cadastrado + o usuário que cadastrou
			res.status(201).json(emploReg);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST
	async findAllEmployees(req: Request, res: Response) {

		/*
			Rota de request de todos os usuários
			Formato da rota: "/employees/request"
		*/

		try {
			// Configurando o prisma para buscar todos os funcionarios da tabela
			const emploReq = await prisma.employees.findMany();
			// Resposta retorna todos os usuários da tabela
			res.status(200).json(emploReq);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST filtrando pelo guid de funcionários
	async findEmployee(req: Request, res: Response) {

	/* 
		Rota de GET/REQUEST pelo GUID retornando um registro
		Formato do request requer o GUID do funcionário
		Formato guid_user = "8d695e19-3422-4990-b70c-d3772efb9c38"
		Formato da rota: "/employee/:guid_employee"
	*/

		try {
			
			// Recebendo o GUID do funcionário dos params
			const guid_employee = req.params.guid_employee;

			// Validação da recepção do GUID do usuário
			if (!guid_employee) {
				res.status(400).json({ erro: "O GUID do funcionário é obrigatorio" });
				return;
			};

			// Configurando o prisma para retornar o funcionário pelo guid
			const emploReqId = await prisma.employees.findUnique({
				where: {
					guid_employee: guid_employee,
				},
			});
			// Caso não encontre retorna uma mensagem de erro
			if (!emploReqId) {
				res.status(404).json({ erro: "Funcionário inexistente" });
				return;
			};
			// Resposta retorna os dados referente ao funcionário
			res.status(200).json(emploReqId);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de PATCH/UPDATE
	async updateEmployee(req: Request, res: Response) {

		/*
			Rota de update de funcionários
			Requer o guid_user e guid_projects
			Formato da rota: "/employee/:guid_user/:guid_projects"
	 		Formato aceito dos dados em JSON:
	 		{
				"firstName":"Exemplo",
				"lastName":"Exemplo",
				"birthDate":"DD-MM-YYYY",
				"hire_date":"DD-MM-YYYY",
				"wage":2000.00
			}
 
		*/

		try {
			// Recebendo o GUID do usuario dos params
			const guid_employee = req.params.guid_employee;

			// Validação do dado recebido do params
			if (!guid_employee) {
				res.status(400).json({ erro: "GUID de usuário obrigatório" });
				return;
			};
			// Configurando o prisma e condição para checar a existência do funcionário
			const checkEmploId = await prisma.employees.findUnique({
				where: {
					guid_employee,
				},
			});
			if (!checkEmploId) {
				res.status(404).json({ erro: "Funcionário não existe" });
				return;
			};

			// Recebendo os dados do body
			let { firstName, lastName, birthDate, hire_date, wage }: IEmployees = req.body;

			// Validação dos dados vindos do body
			if(!firstName || !lastName){
				res.status(400).json({ error: "Nome e sobrenome obrigatórios!" });
				return;
			};

			if(!birthDate || !hire_date) {
				res.status(400).json({ error: "Datas de nascimento e contratação obrigatórias (DD-MM-YYYY)" });
				return;
			};

			if(!wage) {
				res.status(400).json({ error: "Salário obrigatório" });
				return;
			};
			
			// Recebendo os guids do params
			const guid_user  = req.params.guid_user;
			// Recebendo os guids do params
			const guid_projects  = req.params.guid_projects;

			if(!guid_user || !guid_projects){
				res.status(400).json({ error: "GUID de usuarios e projetos obrigatórios!" });
				return;
			};

			// Buscando o guid_user e o guid_salary das tabelas referentes
			const userReqId = await prisma.user.findUnique({
				where: {
					guid_user,
				},
			});
			// Validação da existência desse funcionário
			if (!userReqId) {
				res.status(404).json({ error: "GUID de usuário não existe" });
				return;
			};

			// Configurando o moment para manipular as datas
			birthDate = moment(birthDate, "DD-MM-YYYY").format();
			hire_date = moment(hire_date, "DD-MM-YYYY").format();

			// Configurando o prisma para atualizar os dados da tabela de funcionários
			const emploUpdt = await prisma.employees.update({
				where: {
					guid_employee: guid_employee,
				},
				data: {
					firstName: firstName,
					lastName: lastName,
					birthDate: birthDate,
					hire_date: hire_date,
					wage: wage,
					user_guid: guid_user,
					projects_guid: guid_projects,
				    },
			});
			// Resposta retorna os dados atualizados
			res.status(201).json(emploUpdt);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de DELETE
	async deleteEmployee(req: Request, res: Response) {

		/*
			Rota de DELETE dos registros de funcionários
			Requer o GUID do funcionário para deletar
			Formato guid_employee = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Exemplo da rota: "/employee/delete/:guid_employee"

		*/

		try {
			// Recebendo o GUID do funcionário do params
			const guid_employee = req.params.guid_employee;

			// Validação do dado recebido do params, retornando erro caso o GUID não seja inserido
			if (!guid_employee) {
				res.status(400).json({ erro: "GUID de usuário obrigatório" });
				return;
			};

			// Configurando o prisma para checar se o funcionário existe
			const checkEmploId = await prisma.employees.findUnique({
				where: {
					guid_employee,
				},
			});
			// Caso não exista retorna uma mensagem de erro
			if (!checkEmploId) {
				res.status(404).json({ erro: "Funcionário não existe" });
				return;
			};
			// Configurando o prisma para deletar o funcionário
			const emploDel = await prisma.employees.delete({
				where: {
					guid_employee: guid_employee,
				},
			});
			// Resposta retorna o funcionário que foi deletado
			res.status(200).json(emploDel);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},
};
