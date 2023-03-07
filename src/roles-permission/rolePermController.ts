/*
 * 	Arquivo role/Permission Controller referente as rotas de role e permissions
 * 					Autor: Thiago Pereira
 */

// Importando o Request e Response do express

import { Request, Response } from "express";

// Importando o prisma client

import { prisma } from "../utils/prisma";

// Exportando os controllers para a rota

export default {

	// Rota de POST/CREATE
	async createRolePermission(req: Request, res: Response) {

		/*
			Rota de registro da tabela de junção role-permission
			Requer o guid_permission e o guid_role já inseridos no params
			Formato da rota: "/role-permission/add/:guid_permission/:guid_role"
		*/

		try {

			// Recebendo os guids do params
			const { guid_permission, guid_role } = req.params;

			// Checando a existencia desses guids de permissão e funções
			const roleGuid = await prisma.role.findUnique({
				where: {
					guid_role,
				},
			});
			const permGuid = await prisma.permission.findUnique({
				where: {
					guid_permission,
				},
			});
			// Caso não os encontre, retorna uma mensagem de erro
			if (!permGuid || !roleGuid) {
				res.status(404).json({ error: "GUID de permissão ou role não encontrado" });
				return;
			};

			// Configurando o prisma para registrar os dados
			const rolePermReg = await prisma.role_permission.create({
				data: {
					permission_guid: guid_permission,
					role_guid: guid_role,
				},
			});
			// Resposta retorna os dados registrados
			res.status(201).json(rolePermReg);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST
	async findAllRolePermission(req: Request, res: Response) {

		/*
			Rota de request da tabela de junção role-permission
			Formato da rota: "/role-permission/request"
		*/

		try {
			// Configurando o prisma para buscar todos os dados da tabela
			const rolePermReq = await prisma.role_permission.findMany();
			// Resposta retorna todos os dados da tabela
			res.status(200).json(rolePermReq);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST filtrando pelo guid
	async findRolePermission(req: Request, res: Response) {

		/* 
			Rota de GET/REQUEST pelo GUID retornando um registro
			Formato do request requer o GUID
			Formato guid_role_perm = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Formato da rota: "/role-permission/request/:guid_role_perm"
		*/

		try {
			// Recebendo o GUID dos params
			const { guid_role_perm } = req.params;

			// Validação da recepção do GUID
			if (!guid_role_perm) {
				res.status(400).json({ erro: "O GUID é obrigatorio" });
				return;
			};
			// Checando a existencia desse GUID
			const checkRolePermId = await prisma.role_permission.findUnique({
				where: {
					guid_role_perm,
				},
			});
			// Caso não exista retorna uma mensagem de erro
			if (!checkRolePermId) {
				res.status(400).json({ message: "GUID Função-Permissão não encontrado" });
				return;
			};
			// Configurando o prisma para retornar o dado pelo GUID
			const rolePermReqId = await prisma.role_permission.findUnique({
				where: {
					guid_role_perm: guid_role_perm,
				},
			});
			// Resposta retorna o dado solicitado
			res.status(200).json(rolePermReqId);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de PATCH/UPDATE
	async updateRolePermission(req: Request, res: Response) {

		/*
			Rota de update da tabela de junção role-permission
			Requer o guid_role_perm para filtrar
			Requer o guid_permission e o role_permission inseridos no params
			Formato da rota: "/role-permission/update/:guid_role_perm/:guid_permission/:guid_role"
		*/

		try {
			// Recebendo o GUID dos params
			const { guid_role_perm } = req.params;

			// Validação da recepção do GUID
			if (!guid_role_perm) {
				res.status(400).json({ erro: "O GUID é obrigatorio" });
				return;
			};
			// Checando se o GUID existe
			const checkRolePermId = await prisma.role_permission.findUnique({
				where: {
					guid_role_perm,
				},
			});
			// Caso o guid não exista, retorna uma mensagem de erro
			if (!checkRolePermId) {
				res.status(404).json({ message: "GUID role/Permission não encontrado" });
				return;
			};

			// Recebendo os guids de permissão e função do params
			const { guid_permission, guid_role } = req.params;

			// Validando se os guids existem
			const roleGuid = await prisma.role.findUnique({
				where: {
					guid_role,
				},
			});
			const permGuid = await prisma.permission.findUnique({
				where: {
					guid_permission,
				},
			});
			// Caso não existam, retorna uma mensagem de erro
			if (!permGuid || !roleGuid) {
				res.status(404).json({ error: "GUID de permissão ou role não encontrado" });
				return;
			};

			// Configurando o prisma para atualizar os dados da tabela
			const rolePermUpdt = await prisma.role_permission.update({
				where: {
					guid_role_perm: guid_role_perm,
				},
				data: {
					permission_guid: guid_permission,
					role_guid: guid_role,
				},
			});
			// Resposta retorna os dados atualizados
			res.status(201).json(rolePermUpdt);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de DELETE
	async deleteRolePermission(req: Request, res: Response) {
		
		/*
			Rota de DELETE dos registros 
			Requer o GUID para deletar
			Formato guid_role_perm = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Exemplo da rota: "/role-permission/delete/:guid_role_perm"
		*/

		try {

			// Recebendo o GUID do params
			const guid_role_perm = req.params.guid_role_perm;

			// Validação da recepção do GUID
			if (!guid_role_perm) {
				res.status(400).json({ erro: "O GUID é obrigatorio" });
				return;
			};

			// Configurando o prisma para checar se o dado existe
			const checkRolePermId = await prisma.role_permission.findUnique({
				where: {
					guid_role_perm,
				},
			});
			// Caso não exista retorna uma mensagem de erro
			if (!checkRolePermId) {
				res.status(404).json({ message: "GUID role/Permission não encontrado" });
			};
			// Configurando o prisma para deletar os dados
			const rolePermDel = await prisma.role_permission.delete({
				where: {
					guid_role_perm: guid_role_perm,
				},
			});
			// Resposta retorna informações dos dados deletados
			res.status(200).json(rolePermDel);
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			res.status(400).json( {erro:"Ocorreu um erro!"} );
		};
	},
};
