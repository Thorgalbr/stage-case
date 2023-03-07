/*
    * Configuração base do CRUD tabela de Departamentos
    *           Autor: Thiago Pereira
*/

// Importando o express e configurando o router 

import express from 'express';
const deptRouter = express.Router();

// Importando a rota de controller da tabela de Departamentos

import departmentsController from './departmentsController';

/*
    * Rotas da tabela de Departamentos importando do Controller referente a ela
*/

deptRouter.post('/departments/add/:guid_user', departmentsController.createDepartment);

deptRouter.get('/departments/request', departmentsController.findAllDepartments);

deptRouter.get('/departments/request/:guid_dept', departmentsController.findDepartment);

deptRouter.patch('/departments/update/:guid_dept', departmentsController.updateDepartment);

deptRouter.delete('/departments/delete/:guid_dept',departmentsController.deleteDepartment);

// Exportando a rota no código

export { deptRouter };