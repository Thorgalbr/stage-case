/*
 * Arquivo Auth referente ao middleware de autenticação da aplicação
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
		const token: string = req.headers.authorization?.split(" ")[1]!;

		if (!token) {
			res
				.status(401)
				.json({ erro: "Token não informado, usuário não autenticado!" });
		}

		const decoded = verify(
			token,
			process.env.RANDOM_TOKEN_SECRET!
		) as JwtPayload;

		const userId = decoded.userId;

		if (req.body.userId && req.body.userId !== userId) {
			throw "GUID de usuário inválido";
		} else {
			next();
		}
	} catch (error) {
		res.status(401).json({ erro: "Token inválido!" });
	}
}
