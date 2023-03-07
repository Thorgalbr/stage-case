/*
 	 Arquivo roleController referente aos controllers da rota da tabela de roles
  				Autor: Thiago Pereira
 */

// Importando o Request e Response do express

import { Request, Response } from "express";

// Importando o prisma client

import { prisma } from "../utils/prisma";

// Importando a interface IRoles para configurar os datatypes

import { IRoles } from "../utils/interfaces";

// Exportando os controllers para a rota

export default {

	// Rota de POST/CREATE
	async createRole(req: Request, res: Response) {

		/*
			Rota de registro de funções
			Formato do request requer o GUID do usuário
			Formato guid_user = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Formato da rota: "/roles/add/:user_guid"
	 		Formato aceito dos dados em JSON:
	 		{
				"roleTitle":"Administrador"
			}
		*/

		try {

			// Recebendo os dados do body para registro
			const { roleTitle }: IRoles = req.body;

			// Recebendo os dados do user_guid do body
			const { guid_user } = req.params;
			// Buscando o guid user da tabela de usuarios para adicionar ao valor guid_user
			const guidUsrReq = await prisma.user.findUnique({
				where: {
					guid_user,
				},
			});
			// Checando a existência do GUID de usuário
			if (!guidUsrReq) {
				res.status(404).json({ erro: "O GUID de usuário não existe!" });
				return;
			};
	
			// Validação dos dados recebidos do body e do params
			if (!roleTitle) {
				res.status(400).json({ erro: "O nome da role é obrigatório!" });
				return;
			};
			if (!guid_user) {
				res.status(400).json({ erro: "O GUID de usuário é obrigatório!" });
				return;
			};
			// Verificando a existência da função
			let roleTitleCheck = await prisma.role.findUnique({
				where: {
					roleTitle,
				},
			});
			// Caso já exista a função retorna um erro
			if (roleTitleCheck) {
				return res.status(400).json({ error: "Esta função já existe!" });
				return;
			};
			// Configurando o prisma para registrar a nova função na tabela
			const regRole = await prisma.role.create({
				data: {
					roleTitle,
					user_guid: guid_user
				},
			});

			// Em caso de sucesso retorna os dados adicionados
			return res.status(201).json(regRole);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST
	async findAllRoles(req: Request, res: Response) {

		/*
			Rota de request de todas as funções
			Formato da rota: "/roles/request"
		*/

		try {
			// Configurando o prisma para solicitar todos os dados da tabela de funções
			const reqRoles = await prisma.role.findMany();
			// Resposta retorna todos os dados da tabela de funções
			return res.status(200).json(reqRoles);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST filtrando pelo GUID de funções
	async findRole(req: Request, res: Response) {

		/*
			Rota de request das funções pelo GUID
			Formato do request requer o GUID da função
			Formato guid_user = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Formato da rota: "/roles/request/:guid_role"
		*/

		try {
			// Recebendo o guid dos params
			const guid_role = req.params.guid_role;
			// Checando se o guid da função chegou no params
			if(!guid_role){
				res.status(400).json({ erro:"GUID da função é obrigatório!" });
				return;
			};

			// Configurando o prisma para solicitar os dados filtrado pelo GUID
			const reqRoleGuid = await prisma.role.findUnique({
				where: {
					guid_role: guid_role
				},
			});
			// Validando se o dado solicitado existe
			if(!reqRoleGuid) {
				res.status(404).json({ erro:"Esta função não existe!" });
				return;
			};
			// Em caso de sucesso retorna a função solicitada
			return res.status(200).json(reqRoleGuid);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de PATCH/UPDATE
	async updateRole(req: Request, res: Response) {

		/*
			Rota de update de funções
			Formato do request requer o GUID da função e o GUID do usuário
			Formato guid_role/guid_user = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Formato da rota: "/roles/update/:guid_role/:guid_user"
	 		Formato aceito dos dados em JSON:
	 		{
				"roleTitle":"Administrador"
			}
		*/

		try {
			// Recebendo os guids de função e usuário do params
			const { guid_role, guid_user } = req.params;

			// Configurando o prisma para receber o usuário pelo guid_user
			const userGuidReq = await prisma.user.findUnique({
				where: {
					guid_user,
				},
			});
			// Validação para checar se o usuário existe
			if (!userGuidReq) {
				res.status(404).json({ erro: "Este usuário não existe!" });
				return;
			};
			// Validação da existencia da função
			const checkRoleGuid = await prisma.role.findUnique({
				where: {
					guid_role
				},
			});
			// Se não existir a função retorna uma mensagem de erro
			if(!checkRoleGuid){
				res.status(404).json({ erro: "Esta função não existe!" });
				return;
			};

			// Recebendo o dado para atualização do body
			const { roleTitle }: IRoles = req.body;

			// Validação dos dados recebidos do body
			if (!guid_role || !guid_user) {
				res.status(400).json({ erro: "O GUID da função e do usuário são obrigatórios!" });
				return;
			};
			if (!roleTitle) {
				res.status(400).json({ erro: "O nome da função é obrigatório!" });
				return;
			};

			// Configurando o prisma para o update dos dados da tabela de funções
			const updtRole = await prisma.role.update({
				where: {
					guid_role,
				},
				data: {
					roleTitle,
					user_guid: guid_user
				},
			});
			// Resposta retorna os dados atualizados
			return res.status(201).json(updtRole);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de DELETE
	async deleteRole(req: Request, res: Response) {

		/*
			Rota de delete das funções
			Formato do request requer o GUID da função
			Formato guid_user = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Formato da rota: "/roles/delete/:guid_role"
		*/

		try {
			// Recebendo a guid de função do params
			const guid_role = req.params.guid_role;

			// Validação para checar se o guid da função foi recebido
			if (!guid_role) {
				res.status(400).json({ erro: "O GUID da função é obrigatório!" });
				return;
			};

			// Validação da existencia da função a ser deletada
			const checkRoleGuid = await prisma.role.findUnique({
				where:{
					guid_role
				},
			});
			// Caso não exista retorna um erro informando
			if(!checkRoleGuid){
				res.status(404).json({ erro: "Está função não existe!" });
				return;
			};

			// Configurando o prisma para deletar a função
			const delRole = await prisma.role.delete({
				where: {
					guid_role: guid_role,
				},
			});
			// Resposta retorna a função que foi deletada
			return res.status(200).json(delRole);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},
};
