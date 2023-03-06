/*
 * Arquivo AuthController - Controle do fluxo de autenticação da aplicação
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
		try {
			const { email, password }: IUser = req.body;

			if (!email || !password) {
				res.status(422).json({ erro: "email e senha obrigatorios!" });
			}

			const user = await prisma.user.findUnique({
				where: {
					email,
				},
			});

			if (!user) {
				return res.status(422).json({ erro: "Usuário não existe" });
			}

			const isValidPassword = await compare(password, user.password);

			if (!isValidPassword) {
				res.status(422).json({ erro: "Senha inválida!" });
			}

			const token = sign(
				{ guid_user: user.guid_user },
				process.env.RANDOM_TOKEN_SECRET!,
				{ expiresIn: "1d" }
			);

			const { guid_user } = user;

			return res.json({ user: { guid_user, email }, token });
		} catch (error) {
			return res.json({ error });
		}
	},
};
