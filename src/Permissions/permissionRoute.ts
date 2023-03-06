/*
 *       Configuração base do CRUD da tabela de Permissões 
 *                  Autor: Thiago Pereira
*/

// Importando o express e configurando o router 

import express from 'express';
const permissionRouter = express.Router();

// Importando os controllers dos dados da tabela

import permissionController from './permissionController';

/*
    * Rotas da tabela de Permissões importando do Controller referente a ela
*/

permissionRouter.post('/permission/add', permissionController.createPermission);

permissionRouter.get('/permissions/request', permissionController.findAllPermissions);

permissionRouter.get('/permission/request/:guid_permission', permissionController.findPermission);

permissionRouter.patch('/permission/update/:guid_permission', permissionController.updatePermission);

permissionRouter.delete('/permission/delete/:guid_permission', permissionController.deletePermission);

// Exportando a rota no código

export { permissionRouter };