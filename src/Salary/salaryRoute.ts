/*
    * Configuração base do CRUD da tabela de salários
*/

// Importando o express e configurando o router 

import express from 'express';
const salRouter = express.Router();

// Importando os controles dos dados da tabela

import salaryController from './salaryController';

/*
    * Rotas da tabela de salarios importando do controller referente a ela
*/

salRouter.post('/salary/add', salaryController.createSalary);

salRouter.get('/salary/request', salaryController.findAllSalary);

salRouter.get('/salary/request/:guid_salary', salaryController.findSalary);

salRouter.patch('/salary/update/:guid_salary', salaryController.updateSalary);

salRouter.delete('/salary/delete/:guid_salary', salaryController.deleteSalary);

// Exportando a rota no código

export { salRouter };