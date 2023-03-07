/*
 * Arquivo Auth referente ao middleware de autenticação da aplicação
 *					Autor: Thiago Pereira
 */

// Importando o Request e Response do express

import { NextFunction, Request, Response } from "express";

// Importando a função verify do jwt

import { verify } from "jsonwebtoken";

// Importando a interface JwtPayload

import { JwtPayload } from "../utils/interfaces";

// Exportando a função AuthMiddlewares para checagem de autenticação da aplicação

export function authMiddlewares(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {

		// Recebendo o bearer token do header e passando na variavel token para validação de autenticação
		const token: string = req.headers.authorization?.split(" ")[1]!;
		// Checando se o usuário possui um token válido
		if (!token) {
			// Caso o token seja invalido, retorna uma mensagem de erro
			res.status(401).json({ erro: "Token não informado, usuário não autenticado!" });
			return;
		};

		// Configurando a verificação do token e o secret 
		const decoded = verify(
			token,
			process.env.RANDOM_TOKEN_SECRET!
		) as JwtPayload;
		// Peparando a checagem do userID com o token
		const userId = decoded.userId;
		if (req.body.userId && req.body.userId !== userId) {
			throw "GUID de usuário inválido";
		} else {
			// Caso esteja tudo certo, ele prossegue com a autenticação
			next();
		}
	} catch (error) {
		// Em caso de falha, retorna uma mensagem informando que o Token é inválido
		res.status(401).json({ erro: "Token inválido!" });
	};
};
