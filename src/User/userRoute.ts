/*
 * Configuração base do CRUD da tabela de usuários
 *         Autor: Thiago Pereira
 */

// Importando o express e configurando o router

import express from "express";
const userRouter = express.Router();

// Importando os controles dos dados da tabela

import userController from "./userController";

/*
 * Rotas da tabela de Users importando do Controller referente a ela
 */

userRouter.post("/user/add", userController.createUser);

userRouter.get("/users/request", userController.findAllUsers);

userRouter.get("/user/request/:guid_user", userController.findUser);

userRouter.patch("/user/update/:guid_user", userController.updateUser);

userRouter.delete("/user/delete/:guid_user", userController.deleteUser);

// Exportando a rota no código

export { userRouter };
