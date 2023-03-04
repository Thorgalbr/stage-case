/*
    * Configuração base do CRUD tabela de Departamentos
*/

// Importando o express e configurando o router 

import express from 'express';
const deptRouter = express.Router();

// Importando o prisma client e configurando

import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

// Importando a rota de controller da tabela de Departamentos

import departmentsController from './departmentsController';

/*
    * Rotas da tabela de Departamentos importando do Controller referente a ela
*/

deptRouter.post('/department/add', departmentsController.createDepartment);

deptRouter.get('/departments', departmentsController.findAllDepartments);

deptRouter.get('/department/:guid_dept', departmentsController.findDepartment);

deptRouter.patch('/department/update/:guid_dept', departmentsController.updateDepartment);

deptRouter.delete('/department/delete/:guid_dept',departmentsController.deleteDepartment);

// Exportando a rota no código

export { deptRouter };