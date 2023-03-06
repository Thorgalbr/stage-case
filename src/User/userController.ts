/*
  	Arquivo userController referente aos controllers da rota de usuários
  					Autor: Thiago Pereira
 */

// Importando o Request e Response do express

import { Request, Response } from "express";

// Importando o prisma client

import { prisma } from "../utils/prisma";

// Importando a interface IUser para configurar os datatypes

import { IUser } from "../utils/interfaces";

// Importando o metodo hash do bcrypt para efetuar a criptografia do password

import { hash } from "bcryptjs";

// Exportando os controllers para a rota

export default {
	// Rota de POST/CREATE
	async createUser(req: Request, res: Response) {
		/*
			Rota de registro de usuários
	 		Formato aceito dos dados em JSON:
	 		{
				"firstName":"Exemplo",
				"lastName":"Exemplo",
				"email":"exemplo@provedor.com",
				"password":"exemplo"
			}
 
		*/

		try {
			// Recebendo os dados para registro do body
			const { firstName, lastName, email, password }: IUser = req.body;

			// Passando o password na função hash do bcryptjs para criptografar o retorno
			const hash_password = await hash(password, 8);

			// Validação dos dados recebidos do body
			if (!firstName || !lastName) {
				res.status(422).json({ erro: "Nome e sobrenome obrigatorios!" });
			};

			if (!email || !password) {
				res.status(422).json({ erro: "email e senha obrigatorios!" });
			};

			// Validação para checar se o usuário já existe
			let emailCheck = await prisma.user.findUnique({
				where: {
					email,
				},
			});
			// Se o usuário existir retorna uma mensagem informando
			if (emailCheck) {
				return res.status(422).json({ error: "Este usuário já existe!" });
			};

			// Configurando o prisma para efetuar o registro do novo usuário
			const userReg = await prisma.user.create({
				data: {
					firstName: firstName,
					lastName,
					email,
					password: hash_password,
				},
			});
			// Caso obtenha sucesso retorna os dados do usuário cadastrado com o password encriptado
			return res.status(201).json(userReg);
		} catch (error) {
			// Se não obter sucesso retorna esta mensagem de erro
			return res.status(400).json({ error: "Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST
	async findAllUsers(req: Request, res: Response) {
		try {
			// Configurando o prisma para retornar todos os usuários
			const userReq = await prisma.user.findMany();
			// Retorna em caso de sucesso a lista dos usuários
			return res.status(200).json(userReq);
		} catch (error) {
			// Caso não obtenha sucesso retorna uma mensagem de erro
			res.status(404).json({ error: "Ocorreu um erro!" });
		};
	},

	async findUser(req: Request, res: Response) {

	/* 
		Rota de GET/REQUEST pelo GUID retornando um registro
		Formato do request requer o GUID do usuário 
		Formato guid_user = "8d695e19-3422-4990-b70c-d3772efb9c38"
		Exemplo da rota: "/user/request/:guid_user"
	*/

		try {
			// Recebendo o GUID do usuario dos params
			const guid_user = req.params.guid_user;
			// Configurando o prisma para retornar um usuario baseando no GUID
			const userReqId = await prisma.user.findUnique({
				where: {
					guid_user: guid_user,
				},
			});
			// Validação da existência do usuário no banco de dados
			if (!userReqId) {
				res.status(422).json({ erro: "Usuário não encontrado" });
			};
			// Resposta retorna os dados referente ao usuário filtrado
			return res.status(200).json(userReqId);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(404).json({ error: "Ocorreu um erro!" });
		};
	},

	// Rota de PATCH/UPDATE
	async updateUser(req: Request, res: Response) {

		/*
			Rota de PATCH/UPDATE dos registros de usuários
			Requer o GUID do usuário para atualização
			Formato guid_user = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Exemplo da rota: "/user/update/:guid_user"

			Formato aceito dos dados em JSON:
	 		{
				"firstName":"Exemplo",
				"lastName":"Exemplo",
				"email":"exemplo@provedor.com",
				"password":"exemplo"
			}
 
		*/

		try {
			// Recebendo o GUID do usuario dos params
			const guid_user = req.params.guid_user;
			// Validação do dado recebido do params
			if (!guid_user) {
				res.status(422).json({ erro: "GUID de usuário obrigatório" });
			}
			// Configurando o prisma para checar a existência do usuário
			const userGuidCheck = await prisma.user.findUnique({
				where: {
					guid_user,
				},
			});
			// Caso não exista usuário retorna uma mensagem de erro
			if (!userGuidCheck) {
				res.status(404).json({ erro: "Usuário não encontrado!" });
			};
			// Recebendo os dados do body
			const { firstName, lastName, email, password }: IUser = req.body;
			// Passando o password na função hash do bcryptjs para criptografar o retorno
			const hash_password = await hash(password, 8);

			// Validação da existência dos dados recebidos, retorna erro em caso de falta de dados
			if (!firstName || !lastName) {
				res.status(422).json({ erro: "Nome e sobrenome obrigatorios!" });
			};

			if (!email || !password) {
				res.status(422).json({ erro: "email e senha obrigatorios!" });
			};

			// Configurando o prisma para a atualização dos dados
			const userUpdt = await prisma.user.update({
				where: {
					guid_user: guid_user,
				},
				data: {
					firstName: firstName,
					lastName: lastName,
					email: email,
					password: hash_password,
				},
			});
			// Em caso de sucesso retorna os dados atualizados
			return res.status(201).json(userUpdt);
		} catch (error) {
			// Caso aconteça algum erro retorna uma mensagem informando
			res.status(400).json({ error: "Ocorreu um erro!" });
		};
	},

	// Rota de DELETE
	async deleteUser(req: Request, res: Response) {
		try {
			// Recebendo o GUID do usuario dos params
			const guid_user = req.params.guid_user;
			// Validação do dado recebido do params, retornando erro caso o GUID não seja inserido
			if (!guid_user) {
				res.status(422).json({ erro: "GUID de usuário obrigatório" });
			};

			// Configurando o prisma para checar a existência do usuário
			const userGuidCheck = await prisma.user.findUnique({
				where: {
					guid_user,
				},
			});
			// Caso não exista usuário retorna uma mensagem de erro
			if (!userGuidCheck) {
				res.status(404).json({ erro: "Usuário não encontrado!" });
			};

			// Configurando o prisma para deletar os dados do usuário
			const userDel = await prisma.user.delete({
				where: {
					guid_user: guid_user,
				},
			});
			// Em caso de sucesso retorna uma mensagem informando que o usuário foi deletado
			return res.status(200).json({ message: "Usuário Deletado!" });
		} catch (error) {
			// Caso falhe retorna uma mensagem de erro
			res.status(400).json({ error: "Ocorreu um erro!" });
		};
	},
};
