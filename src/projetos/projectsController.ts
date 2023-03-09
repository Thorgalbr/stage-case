/*
 * Arquivo departmentsController referente aos controllers da rota da tabela de projetos
 *					Autor: Thiago Pereira
 */

// Importando o Request e Response do express

import { Request, Response } from "express";

// Importando o prisma client e configurando

import { prisma } from "../utils/prisma";

// Importando a interface IDepts do arquivo de interfaces

import { IProjects } from "../utils/interfaces";

// Exportando os controllers para a rota

export default {

	// Rota de POST/CREATE
	async createProject(req: Request, res: Response) {

		/*
			Rota de registro de projetos
			Formato da rota: "/projects/add/:guid_user/dept_guid"
			Formato guid_projects e dept_guid = "8d695e19-3422-4990-b70c-d3772efb9c38"
	 		Formato aceito dos dados em JSON:
	 		{
				"name":"Exemplo",
			}
 
		*/

		try {
			// Recebendo o dado do body para registro
			const { name, status }: IProjects = req.body;

			// Validação do dado recebido do body
			if(!name || !status){
				res.status(400).json( { mensagem:"O nome do projeto e o status são obrigatórios" } );
				return;
			};

			// Recebendo o guid_user do params
			const guid_user = req.params.guid_user;

            // Recebendo o guid_dept do params
            const guid_dept = req.params.guid_dept

           // Validando o recebimento dos Guids
			if(!guid_user || !guid_dept){
				res.status(400).json( { mensagem:"O GUID do usuário e do departamento são obrigatórios" } );
				return;
			};

			// Checando se o projeto já existe
			const checkProjName = await prisma.projects.findUnique({
				where: {
					name,
				},
			});
			// Se existir retorna uma mensagem de erro
			if (checkProjName) {
				res.status(400).json({ erro: "Este departamento já existe!" });
				return;
			};

			// Configurando o prisma para efetuar o registro do departamento
			const deptReg = await prisma.projects.create({
				data: {
					name: name,
					status: status,
					user_guid: guid_user,
                    dept_guid: guid_dept
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
	async findAllProjects(req: Request, res: Response) {

	/*
		Rota de request de todos os projetos
		Formato da rota: "/projects/request"
	*/

		try {
			// Configurando o prisma para retornar todos os projetos
			const projectReq = await prisma.projects.findMany();
			// Retorna em caso de sucesso a lista dos projetos
			return res.status(200).json(projectReq);
		} catch (error) {
			// Caso falhe, retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST filtrando pelo GUID
	async findProject(req: Request, res: Response) {

	/* 
		Rota de GET/REQUEST pelo GUID retornando um registro
		Formato do request requer o GUID do projeto
		Formato guid_projects = "8d695e19-3422-4990-b70c-d3772efb9c38"
		Formato da rota: "/project/request/:guid_projects"
	*/

		try {

			// Recebendo o GUID dos projetos do params
			const guid_projects = req.params.guid_projects;

			if(!guid_projects){
				res.status(400).json({erro:"GUID do Departamento não recebido"});
				return;
			};

			// Configurando o prisma para buscar o projeto pelo GUID
			const deptReqId = await prisma.projects.findUnique({
				where: {
					guid_projects: guid_projects,
				},
			});
			// Resposta retorna o projeto
			return res.status(200).json(deptReqId);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de PATCH/UPDATE
	async updateProject(req: Request, res: Response) {

		/*
			Rota de atualização de projetos
			Formato da rota: "/project/update/:guid_projects/:guid_user/dept_guid"
			Formato guid_projects, guid_user, dept_guid = "8d695e19-3422-4990-b70c-d3772efb9c38"
	 		Formato aceito dos dados em JSON:
	 		{
				"name":"Exemplo",
			}
 
		*/

		try {
			// Recebendo o GUID dos projetos do params
			const guid_projects = req.params.guid_projects;
			// Validando se o guid existe na requisição
			if (!guid_projects) {
				res.status(400).json({ erro: "GUID do projeto obrigatório" });
				return;
			};

			// Recebendo o guid_user do params
			const guid_user = req.params.guid_user;

            // Recebendo o guid_dept do params
            const guid_dept = req.params.guid_dept

           // Validando o recebimento dos Guids
			if(!guid_user || !guid_dept){
				res.status(400).json( { mensagem:"O GUID do usuário e do departamento são obrigatórios" } );
				return;
			};


			// Recebendo o dado do body para atualização
			const { name, status }: IProjects = req.body;
			// Validando se o nome do projeto existe na requisição
			if (!name || !status) {
				res.status(400).json( { mensagem:"O nome do projeto e o status são obrigatórios" } );
				return;
			};
			// Checando se o projeto existe
			const checkDeptId = await prisma.projects.findUnique({
				where: {
					guid_projects,
				},
			});
			// Caso não exista retorna uma mensagem de erro
			if (!checkDeptId) {
				res.status(404).json({ erro: "Este projeto não existe!" });
				return;
			};

			// Configurando o prisma para atualizar o projeto
			const deptUpdt = await prisma.projects.update({
				where: {
					guid_projects: guid_projects,
				},
				data: {
					name: name,
					status: status,
				},
			});
			// Resposta retorna o projeto atualizado
			return res.status(201).json(deptUpdt);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de DELETE
	async deleteProject(req: Request, res: Response) {

		/*
			Rota de DELETE dos registros de departamentos
			Requer o GUID do projeto para deletar
			Formato guid_dept = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Exemplo da rota: "/project/delete/:guid_projects"

		*/

		try {

			// Recebendo o GUID do projeto dos params
			const guid_projects = req.params.guid_projects;

			// Validação do dado recebido do params, retornando erro caso o GUID não seja inserido
			if (!guid_projects) {
				res.status(400).json({ erro: "GUID do projeto obrigatório" });
				return;
			};
			// Checando se o departamento existe
			const checkProjId = await prisma.projects.findUnique({
				where: {
					guid_projects,
				},
			});
			// Caso não exista, retorna uma mensagem de erro
			if (!checkProjId) {
				res.status(404).json({ erro: "Este projeto não existe!" });
				return;
			};

			// Configurando o prisma para deletar o projeto
			const projDel = await prisma.projects.delete({
				where: {
					guid_projects: guid_projects,
				},
			});
			// Resposta retorna o projeto deletado
			return res.status(200).json(projDel);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},
};