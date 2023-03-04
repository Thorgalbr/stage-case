/*
    * Configuração base do CRUD da tabela de Funcionários
*/

// Importando o express e configurando o router 
import express from 'express';
const employeesRouter = express.Router();

// Importando os controles dos dados da tabela
import employeesController from './employeesController';

// Utilizando a interface para configurar os datatypes
interface IEmployees {
    firstName: string,
    lastName: string,
    birthDate: string,
    hire_date: string,
};

/*
    * Rotas da tabela de Funcionários importando dos Controller referente a ela
*/

employeesRouter.post('/employee/:guid_user/:guid_salary', employeesController.createEmployee);

employeesRouter.get('/employees', employeesController.findAllEmployees);

employeesRouter.get('/employee/:guid_employee', employeesController.findEmployee);

employeesRouter.patch('/employees/update/:guid_employee/:guid_user/:guid_salary', employeesController.updateEmployee);

employeesRouter.delete('/employees/delete/:guid_employee', employeesController.deleteEmployee);

// Exportando a rota e a interface no código

export { employeesRouter, IEmployees };