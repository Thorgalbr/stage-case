import { NextFunction, Request, Response,  } from "express";
import { verify } from "jsonwebtoken";


type TokenPayload = {

    guid_user: string;
    iat: number;
    exp: number;

};

export function authMiddlewares (req: Request, res: Response, next: NextFunction) {

const { authorization } = req.headers;

    if(!authorization){

        res.status(401).json({erro: "Token não informado, usuário não autenticado!"});

    };

const [, token] = authorization?.split(" ");

    try {

        const authKey = process.env.AUTH_KEY
        const decoded = verify(token, `${authKey}`);
        const { guid_user } = decoded as TokenPayload;

        req.userId = guid_user;

        next();

    } catch (error) {

        res.status(401).json({erro: "Token inválido!"});

    };

};