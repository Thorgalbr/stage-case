/*
    * Arquivo AuthRouter - configuração da rota de autenticação
*/

// Importando o express e configurando o router 

import express from 'express';
const authRouter = express.Router();

import authController from './authController';

authRouter.post('/auth', authController.authenticate);

export { authRouter };
