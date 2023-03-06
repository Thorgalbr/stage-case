/*
 *  Arquivo AuthRouter - configuração da rota de autenticação
 *              Autor: Thiago Pereira
 */

// Importando o express e configurando o router

import express from "express";
const authRouter = express.Router();

import authController from "./authController";

/*
 * Rota de Autenticação de Usuários - Retorna GUID,Email e Token quando obtém sucesso
 */

authRouter.post("/auth", authController.authenticate);

// Exportando a rota no código

export { authRouter };
