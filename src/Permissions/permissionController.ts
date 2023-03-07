/*
 	 Arquivo permissionController referente aos controllers da rota da tabela de permissions
 							Autor: Thiago Pereira	
 */

// Importando o Request e Response do express

import { Request, Response } from "express";

// Importando o prisma client

import { prisma } from "../utils/prisma";

// Exportando os controllers para a rota

export default {

	// Rota de POST/CREATE
	async createPermission(req: Request, res: Response) {

		/*
			Rota de registro de permissões
			Formato da rota: "/permissions/add"
	 		Formato aceito dos dados em JSON:
	 		{
				"permTitle":"Admin"
			}
		*/


		try {
			// Recebendo os dados do body para registro
			const permTitle: string = req.body.permTitle;
			// Validando o dado recebido do body
			if(!permTitle){
				res.status(400).json( {erro:"O nome da permissão é obrigatório"} );
				return;
			};
			// Checando para ver se a permissão já existe
			let checkPermId = await prisma.permission.findUnique({
				where: {
					permTitle,
				},
			});
			// Se existir retorna uma mensagem informando
			if (checkPermId) {
				res.status(400).json({ erro: "Esta permissão já existe!" });
				return;
			};
			// Configurando o prisma para registrar a permissão
			const regPermit = await prisma.permission.create({
				data: {
					permTitle: permTitle,
				},
			});

			// Resposta retorna o dado registrado
			return res.status(201).json(regPermit);
		} catch (error) {
			// Caso falhe retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST
	async findAllPermissions(req: Request, res: Response) {

		/*
			Rota de request de todas as permissões
			Formato da rota: "/permissions/request"
		*/

		try {
			// Configurando o prisma para solicitar todos os dados da tabela de permissões
			const reqPermit = await prisma.permission.findMany();
			// Resposta retorna todos os dados da tabela de permissões
			return res.status(200).json(reqPermit);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST filtrando pelo GUID das permissões
	async findPermission(req: Request, res: Response) {

		/*
				Rota de request das funções pelo GUID
			Formato do request requer o GUID da função
			Formato guid_permission = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Formato da rota: "/permissions/request/:guid_permission"
		*/

		try {
			// Recebendo o guid dos params
			const guid_permission = req.params.guid_permission;

			if(!guid_permission){
				res.status(400).json( {erro:"GUID da permissão não recebido"} );
				return;
			};
			// Configurando o prisma para solicitar o dado filtrado pelo GUID
			const reqPermitId = await prisma.permission.findUnique({
				where: {
					guid_permission: guid_permission,
				},
			});

			// Validando se o GUID do dado solicitado existe
			if (!reqPermitId) {
				res.status(404).json({ error: "Este GUID de permissão não existe" });
				return;
			};
			// Resposta retorna o dado solicitado
			return res.status(200).json(reqPermitId);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},
	// Rota de UPDATE
	async updatePermission(req: Request, res: Response) {

		/*
			Rota de update de permissões
			Formato do request requer o GUID da permissão
			Formato guid_permission = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Formato da rota: "/permissions/update/:guid_permission"
	 		Formato aceito dos dados em JSON:
	 		{
				"permTitle":"Admin"
			}
		*/

		try {
			// Recebendo a guid de função do params
			const guid_permission = req.params.guid_permission;

			// Validação para checar se o guid da função foi recebido
			if (!guid_permission) {
				res.status(400).json({ erro: "GUID da permissão não recebido" });
				return;
			};
			// Checando a existencia da permissão na tabela
			const guidCheckPermit = await prisma.permission.findUnique({
				where: {
					guid_permission,
				},
			});
			// Caso não exista retorna uma mensagem de erro
			if (!guidCheckPermit) {
				res.status(404).json({ error: "Este GUID de permissão não existe" });
				return;
			};

			// Recebendo o dado do body para atualizar
			const permTitle: string = req.body.permTitle;
			
			// Validando o dado recebido do body
			if(!permTitle){
				res.status(400).json({erro: "O nome da permissão é obrigatório"});
				return;
			};

			// Configurando o prisma para atualizar o dado
			const updtPermit = await prisma.permission.update({
				where: {
					guid_permission: guid_permission,
				},
				data: {
					permTitle: permTitle,
				},
			});
			// Resposta retorna o dado atualizar
			return res.status(201).json(updtPermit);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de DELETE
	async deletePermission(req: Request, res: Response) {

		/*
			Rota de delete das permissões
			Formato do request requer o GUID da permissão
			Formato guid_user = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Formato da rota: "/permissions/delete/:guid_permission"
		*/

		try {
			// Recebendo a guid de função do params
			const guid_permission = req.params.guid_permission;

			// Validação para checar se o guid da função foi recebido
			const guidCheckPermit = await prisma.permission.findUnique({
				where: {
					guid_permission,
				},
			});
			// Se não receber o GUID retorna uma mensagem de erro
			if (!guidCheckPermit) {
				res.status(404).json({ error: "Esta permissão não existe" });
				return;
			};
			// Configurando o prisma para deletar a permissão
			const delPermit = await prisma.permission.delete({
				where: {
					guid_permission: guid_permission,
				},
			});
			// Resposta retorna a permissão que foi deletada
			return res.status(200).json(delPermit);
		} catch (error) {
			// Caso falhe retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},
};
