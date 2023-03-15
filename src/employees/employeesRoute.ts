/*
    * Configuração base do CRUD da tabela de Funcionários
    *               Autor: Thiago Pereira
*/

// Importando o express e configurando o router 
import express from 'express';
const employeesRouter = express.Router();

// Importando os controles dos dados da tabela
import employeesController from './employeesController';

/*
    * Rotas da tabela de Funcionários importando dos Controller referente a ela
*/

employeesRouter.post('/employees/add/:guid_projects', employeesController.createEmployee);

employeesRouter.get('/employees/request', employeesController.findAllEmployees);

employeesRouter.get('/employees/request/:guid_employee', employeesController.findEmployee);

employeesRouter.patch('/employees/update/:guid_employee/:guid_projects', employeesController.updateEmployee);

employeesRouter.delete('/employees/delete/:guid_employee', employeesController.deleteEmployee);

// Exportando a rota e a interface no código

export { employeesRouter };