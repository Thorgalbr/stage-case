/*
 * Arquivo AuthController - Controle do fluxo de autenticação da aplicação
 *					Autor: Thiago Pereira
 */

// Importando o Request e Response do express

import { Request, Response } from "express";

// Importando o prisma client

import { prisma } from "../utils/prisma";

// Importando o metodo hash do bcrypt para efetuar a criptografia do password

import { compare } from "bcryptjs";

// Importando o metodo sign do jsonwebtoken para efetuar a checagem da existencia do user para login

import { sign } from "jsonwebtoken";

// Importando a interface IUser para configurar os datatypes

import { IUser } from "../utils/interfaces";

// Exportando os controllers para a rota

export default {

	async authenticate(req: Request, res: Response) {

		/*
			Rota de Autenticação de Usuários
			Formato da rota: "/auth
	 		Formato aceito dos dados em JSON:
	 		{
				"email":"exemplo@provedor.com",
				"password":"exemplo"
			}
 
		*/

		try {
			// Recebendo do body os dados de Login
			const { email, password }: IUser = req.body;
			// Validando a existencia do email e senha para prosseguir
			if (!email || !password) {
				res.status(422).json({ erro: "email e senha obrigatorios!" });
			};
			// Configurando o prisma para checar a existencia do eusuário
			const user = await prisma.user.findUnique({
				where: {
					email,
				},
			});
			// Caso não exista usuário, retorna uma mensagem de erro
			if (!user) {
				return res.status(422).json({ erro: "Usuário não existe" });
			};

			// Comparando o password com o registrado na tabela de usuários com a função compare() do bcrypt
			const isValidPassword = await compare(password, user.password);

			// Caso o password seja invalido, retorna uma mensagem de erro
			if (!isValidPassword) {
				res.status(422).json({ erro: "Senha inválida!" });
			};

			// Configurando o token do usuário, token secret e o tempo para o token expirar
			const token = sign(
				{ guid_user: user.guid_user },
				process.env.RANDOM_TOKEN_SECRET!,
				{ expiresIn: "1d" }
			);
			// Passando o GUID do usuário na variavel user
			const { guid_user } = user;

			// resposta retorna o GUID do usuário, email e o token de autenticação
			return res.status(200).json({ user: { guid_user, email }, token });
		} catch (error) {
			// Em caso de falha, retorna uma mensagem de erro
			return res.status(400).json({erro:"Não foi possível autenticar o usuário"});
		};
	},
};
