/*
         Configuração base do CRUD da tabela de Roles
                Autor: Thiago Pereira
*/

// Importando o express e configurando o router 

import express from 'express';
const rolesRouter = express.Router();

// Importando a rota de controller da tabela de roles

import rolesController from './rolesController';

/*
    Rotas da tabela de Roles importando do Controller referente a ela
*/

rolesRouter.post('/role/add/:guid_user', rolesController.createRole);

rolesRouter.get('/roles/request', rolesController.findAllRoles);

rolesRouter.get('/role/request/:guid_role', rolesController.findRole);

rolesRouter.patch('/role/update/:guid_role/:guid_user', rolesController.updateRole);

rolesRouter.delete('/role/delete/:guid_role', rolesController.deleteRole);

// Exportando a rota no código

export { rolesRouter };