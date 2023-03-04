/* 
    * Arquivo employeesController referente aos controllers da rota da tabela de funcionários
*/

// Importando o Request e Response do express

import {Request, Response} from 'express';

// Importando o prisma client e configurando

import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

// Importando a interface IEmployees para o controller

import { IEmployees } from './employeesRoute';

// Importando o moment para manipular datas no controller

import moment from 'moment';

// Exportando os controllers para a rota

export default {

    async createEmployee (req: Request, res: Response) {

    try {

        const { firstName, lastName, birthDate, hire_date }: IEmployees = req.body;
    
        const { guid_user, guid_salary } = req.params;

        const userReqId = await prisma.user.findUnique({

            where: {

                guid_user

            },

        });

        const salReqId = await prisma.salary.findUnique({

            where: {

                guid_salary

            },
        });

        if(!userReqId) {

            res.status(422).json({error:"GUID de usuário inexistente"});

        };

        if(!salReqId) {

            res.status(422).json({error:"GUID de salário inexistente"});

        };
       
        moment(birthDate, hire_date, "DD-MM-YYYY").format();
    
        const emploReg = await prisma.employees.create({

            data: {

                firstName: firstName,
                lastName: lastName,
                birthDate: birthDate,
                hire_date: hire_date,
                user_guid: guid_user,
                salary_guid: guid_salary

            },

        });
    
        res.status(200).json(emploReg);
    
    } catch (error) {

        res.json(error);

    };
    
    },

    async findAllEmployees (req: Request, res: Response) {

        try {

            const emploReq = await prisma.employees.findMany();
    
            res.status(200).json(emploReq);
        
        } catch (error) {

           res.json(error); 

        };

    },

    async findEmployee (req: Request, res: Response) {

        try {

            const guid_employee = req.params.guid_employee;

            const checkEmploId = await prisma.employees.findUnique({

                where: {

                    guid_employee

                },

            });

            if(!checkEmploId) {

                res.status(422).json({erro:"Funcionário inexistente"});

            };
    
            const emploReqId = await prisma.employees.findUnique({
    
                where: {
    
                    guid_employee: guid_employee
    
                },
    
            });
        
            res.status(200).json(emploReqId);
        
        } catch (error) {

            res.json(error);

        };

    },

    async updateEmployee (req: Request, res: Response) {

        try {

            const guid_employee = req.params.guid_employee;

            const checkEmploId = await prisma.employees.findUnique({

                where: {

                    guid_employee

                },

            });

            if(!checkEmploId) {

                res.status(422).json({erro:"Funcionário inexistente"});

            };
    
            const { firstName, lastName, birthDate, hire_date }: IEmployees = req.body;

            const { guid_user, guid_salary } = req.params;

            const userReqId = await prisma.user.findUnique({
    
                where: {
    
                    guid_user
    
                },
    
            });
    
            const salReqId = await prisma.salary.findUnique({
    
                where: {
    
                    guid_salary
    
                },
            });
    
            if(!userReqId) {
    
                res.status(422).json({error:"GUID de usuário inexistente"});
    
            };
    
            if(!salReqId) {
    
                res.status(422).json({error:"GUID de salário inexistente"});
    
            }; 
       
            moment(birthDate, hire_date, "DD-MM-YYYY").format();
        
            const emploUpdt = await prisma.employees.update({
    
                where: {
    
                    guid_employee: guid_employee
    
                },
                data: {
    
                    firstName: firstName,
                    lastName: lastName,
                    birthDate: birthDate,
                    hire_date: hire_date,
                    user_guid: guid_user,
                    salary_guid: guid_salary
    
                },
                
            });

            res.status(200).json(emploUpdt);

        } catch (error) {

            res.json(error);

        };

    },

    async deleteEmployee (req: Request, res: Response) {

        const guid_employee = req.params.guid_employee;

        const checkEmploId = await prisma.employees.findUnique({

            where: {

                guid_employee

            },

        });

        if(!checkEmploId) {

            res.status(422).json({erro:"Funcionário inexistente"});

        };
    
        const emploDel = await prisma.employees.delete({

            where: {

                guid_employee: guid_employee

            },

        });
    
        res.status(200).json({Message:"Funcionário deletado"});
    
    },

};