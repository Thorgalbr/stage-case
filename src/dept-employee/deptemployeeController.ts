/* 
    * Arquivo userController referente aos controllers da rota de usuários
*/

// Importando o Request e Response do express

import {Request, Response} from 'express';

// Importando o prisma client

import { prisma } from '../utils/prisma';

// Importando a interface IDeptEmp para informar os datatypes

import { IDeptEmp } from '../utils/interfaces';

// Importando o moment para manipular as datas do código

import moment from 'moment';

// Exportando os controllers para a rota

export default {

    async createDeptEmployee(req: Request, res: Response) {

        try {

            const { guid_dept, guid_employee } = req.params;

            const deptGuid = await prisma.departments.findUnique({
    
                where: {
    
                    guid_dept
    
                },
    
            });

            if(!deptGuid) {

                res.status(422).json({erro:"GUID do departamento obrigatorio"});

            };
    
            const empGuid = await prisma.employees.findUnique({
    
                where: {
    
                    guid_employee
    
                },
    
            });

            if(!empGuid) {

                res.status(422).json({erro:"GUID dos funcionários obrigatorio"});
                
            };
    
            const { from_date, to_date }: IDeptEmp = req.body;
        
            moment(from_date, to_date, "DD-MM-YYYY").format();
        
            const deptEmpReg = await prisma.dept_emp.create({

                data: {

                    dept_guid:  guid_dept,
                    emp_guid: guid_employee,
                    from_date: from_date,
                    to_date: to_date

                },
                include: {

                    departments: true,
                    employee: true,

                }
        
            });
        
            res.status(201).json(deptEmpReg);
        
        } catch (error) {

            res.status(400).json(error);

        };

    },
    
    async findAllDeptEmployees(req: Request, res: Response) {

        try {

            const deptEmpReq = await prisma.dept_emp.findMany();
    
            res.status(200).json(deptEmpReq);
        
        } catch (error) {

            res.status(404).json(error);

        };

    },

    async findDeptEmployee(req: Request, res: Response) {

        try {

            const guid_dept_emp = req.params.guid_dept_emp;

            const checkDeptEmpId = await prisma.dept_emp.findUnique({
    
                where: {
    
                    guid_dept_emp
    
                },
    
            });
    
            if(!checkDeptEmpId){

                res.status(422).json({message:"GUID de departamentos_funcionarios não existente"});

            };
        
            const deptEmpReqId = await prisma.dept_emp.findUnique({

                where: {

                    guid_dept_emp: guid_dept_emp

                },

            });
        
            res.status(200).json(deptEmpReqId);
        
        } catch (error) {

            res.status(404).json(error);

        };

    },

    async updateDeptEmployee(req: Request, res: Response) {

        try {

            const { guid_dept_emp } = req.params;

            const checkDeptEmpGuid = await prisma.dept_emp.findUnique({

                where: {

                    guid_dept_emp

                },

            });

            if(!checkDeptEmpGuid) {

                res.status(422).json({erro:"GUID de departamentos_funcionarios não encontrado"});

            };
    
            const { guid_dept, guid_employee } = req.params;

            const deptGuid = await prisma.departments.findUnique({
    
                where: {
    
                    guid_dept
    
                },
    
            });

            if(!deptGuid) {

                res.status(422).json({erro:"GUID do departamento obrigatorio"});

            };
    
            const empGuid = await prisma.employees.findUnique({
    
                where: {
    
                    guid_employee
    
                },
    
            });

            if(!empGuid){

                res.status(422).json({erro:"GUID dos funcionários obrigatorio"});
                
            };
    
            const { from_date, to_date }: IDeptEmp = req.body;
        
            moment(from_date, to_date, "DD-MM-YYYY").format();
        
            const deptEmpUpdt = await prisma.dept_emp.update({

                where: {

                    guid_dept_emp: guid_dept_emp

                },
                data: {

                    dept_guid:  guid_dept,
                    emp_guid: guid_employee,
                    from_date: from_date,
                    to_date: to_date

                },

            });
        
            res.status(201).json(deptEmpUpdt);
        
        } catch (error) {

            res.status(400).json(error);

        };

    },

    async deleteDeptEmployee (req: Request, res: Response) {

        try {

            const { guid_dept_emp } = req.params;

            const checkDeptEmpGuid = await prisma.dept_emp.findUnique({
    
                where: {
    
                    guid_dept_emp
    
                },
    
            });
    
            if(!checkDeptEmpGuid) {
    
                res.status(422).json({erro:"GUID de departamentos_funcionarios não encontrado"});
    
            };
        
            const deptEmpDel = await prisma.dept_emp.delete({

                where: {

                    guid_dept_emp: guid_dept_emp

                },

            });
        
            res.status(200).json({message:"dados de Departamento/Employee deletados com sucesso!"});
        
        } catch (error) {

            res.status(400).json(error);

        };

    },

};