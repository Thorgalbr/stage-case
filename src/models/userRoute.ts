/*
    * Configuração base do CRUD da tabela de usuários
*/

// Importando o express e configurando o router 

import express from 'express';
const userRouter = express.Router();

// Importando os controles dos dados da tabela

import userController from '../controller/userController';

// Utilizando a interface para configurar os datatypes
interface IUser{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
};

/*
    * Rotas da tabela de Users importando do Controller referente a ela
*/

userRouter.post('/user', userController.createUser);

userRouter.get('/users', userController.findAllUsers);

userRouter.get('/user/:guid_user', userController.findUser);

userRouter.patch('/user/update/:guid_user', userController.updateUser);

userRouter.delete('/user/delete/:guid_user', userController.deleteUser);


// Exportando a rota no código

export { userRouter, IUser };


