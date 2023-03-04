/*
    * Configuração base do CRUD da tabela Departments/Employees 
*/

// Importando o express e configurando o router 

import express from 'express';
const deptEmpRouter = express.Router();

// Importando os controllers dos dados da tabela

import deptemployeeController from './deptemployeeController';

/*
    * Rotas da tabela de Dept/Funcionarios importando do Controller referente a ela
*/

deptEmpRouter.post('/dept-employee/:guid_dept/:guid_employee', deptemployeeController.createDeptEmployee);

deptEmpRouter.get('/dept-employees', deptemployeeController.findAllDeptEmployees );

deptEmpRouter.get('/dept-employee/:guid_dept_emp',deptemployeeController.findDeptEmployee);

deptEmpRouter.patch('/dept-employee/update/:guid_dept_emp/:guid_dept/:guid_employee', deptemployeeController.updateDeptEmployee);

deptEmpRouter.delete('/dept-employee/delete/:guid_dept_emp', deptemployeeController.deleteDeptEmployee);

// Exportando a rota e a interface no código

export { deptEmpRouter };