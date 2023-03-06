/*
    * Configuração base do CRUD da tabela Departments/Employees 
    *               Autor: Thiago Pereira
*/

// Importando o express e configurando o router 

import express from 'express';
const deptEmpRouter = express.Router();

// Importando os controllers dos dados da tabela

import deptemployeeController from './deptemployeeController';

/*
    * Rotas da tabela de Dept/Funcionarios importando do Controller referente a ela
*/

deptEmpRouter.post('/dept-employees/add/:guid_dept/:guid_employee', deptemployeeController.createDeptEmployee);

deptEmpRouter.get('/dept-employees/request', deptemployeeController.findAllDeptEmployees );

deptEmpRouter.get('/dept-employees/request/:guid_dept_emp',deptemployeeController.findDeptEmployee);

deptEmpRouter.patch('/dept-employees/update/:guid_dept_emp/:guid_dept/:guid_employee', deptemployeeController.updateDeptEmployee);

deptEmpRouter.delete('/dept-employees/delete/:guid_dept_emp', deptemployeeController.deleteDeptEmployee);

// Exportando a rota e a interface no código

export { deptEmpRouter };