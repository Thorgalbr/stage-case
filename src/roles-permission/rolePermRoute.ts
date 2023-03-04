/*
    * Configuração base do CRUD da tabela Role/Permission 
*/

// Importando o express e configurando o router 

import express from 'express';
const rolePermRouter = express.Router();

// Importando os controles dos dados da tabela

import rolePermController from './rolePermController';

/*
    * Rotas da tabela de salarios importando do controller referente a ela
*/

rolePermRouter.post('/role-permission/add', rolePermController.createRolePermission);

rolePermRouter.get('/role-permission/request', rolePermController.findAllRolePermission);

rolePermRouter.get('/role-permission/request/:guid_role_perm', rolePermController.findRolePermission);

rolePermRouter.patch('/role-permission/update/:guid_role_perm', rolePermController.updateRolePermission);

rolePermRouter.delete('/role-permission/delete/:guid_role_perm', rolePermController.deleteRolePermission);

// Exportando a rota no código

export { rolePermRouter };