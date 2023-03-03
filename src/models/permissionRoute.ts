/*
    * Configuração das Rotas CRUD da tabela de Permissões 
*/

// Importando o express e configurando o router 

import express from 'express';
const permissionRouter = express.Router();

// Importando o prisma client e configurando

import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

import permissionController from '../controller/permissionController';

/*
    * Rotas da tabela de Permission importando do Controller referente
*/

permissionRouter.post('/permission', permissionController.createPermission);

permissionRouter.get('/permissions', permissionController.findAllPermissions);

permissionRouter.get('/permission/guid_permission', permissionController.findPermission);

permissionRouter.patch('/permission/update/guid_permission', permissionController.updatePermission);

permissionRouter.delete('/permission/delete/guid_permission', permissionController.deletePermission);

// Exportando a rota no código

export { permissionRouter };