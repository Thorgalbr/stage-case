/* 
    * Arquivo salaryController referente aos controllers da rota da tabela de salários
*/

// Importando o Request e Response do express

import {Request, Response} from 'express';

// Importando o prisma client e configurando

import { PrismaClient } from '../../prisma/prismaClient'
import { Decimal } from '@prisma/client/runtime';
const prisma = new PrismaClient();

// Exportando os controllers para a rota

export default {

    async createSalary(req: Request, res: Response) {

    try {

        const salary: Decimal = req.body;

        if(!salary){

            res.status(422).json({erro:"Valor do salário obrigatorio"});
            return;

        };
    
        const salReg = await prisma.salary.create({

            data: {

                salary: salary

            },
            include: {

                employees: true,

            },

        });
    
        res.status(200).json(salReg);
    
    } catch (error) {

        res.json(error);

    };
    
    },

    async findAllSalary(req: Request, res: Response) {

        try {

            const salReq = await prisma.salary.findMany();
    
            res.status(200).json(salReq);
         
        } catch (error) {

            res.json(error);

        };

    },

    async findSalary(req: Request, res: Response) {

        try {

            const guid_salary = req.params.guid_salary;

            const checkSalId = await prisma.salary.findUnique({

                where: {

                    guid_salary

                },

            });

            if(!checkSalId) {

                res.status(422).json({erro:"Salário inexistente"});

            };
    
            const salReqId = await prisma.salary.findUnique({

                where: {

                    guid_salary: guid_salary

                },

            });
        
            res.status(200).json(salReqId);
        
        } catch (error) {

            res.json(error);

        };

    },

    async updateSalary(req: Request, res: Response) {

        try {

            const guid_salary = req.params.guid_salary;

            const checkSalId = await prisma.salary.findUnique({

                where: {

                    guid_salary

                },

            });

            if(!checkSalId) {

                res.status(422).json({erro:"Salário inexistente"});

            };
    
            const salary: Decimal = req.body;

            if(!salary){

                res.status(422).json({erro:"Valor do salário obrigatorio"});
                return;
                
            };
        
            const salUpdt = await prisma.salary.update({

                where: {

                    guid_salary: guid_salary

                },
                data: {

                    salary: salary

                }

            });
        
            res.status(200).json(salUpdt);
        
        } catch (error) {

            res.json(error);

        };

    },

    async deleteSalary(req: Request, res: Response) {

        try {

            const guid_salary = req.params.guid_salary;

            const checkSalId = await prisma.salary.findUnique({

                where: {

                    guid_salary

                },

            });

            if(!checkSalId) {

                res.status(422).json({erro:"Salário inexistente"});

            };
    
            const salDel = await prisma.salary.delete({
    
                where: {
    
                    guid_salary: guid_salary
    
                },
    
            });
        
            res.status(200).json({message:"Salário deletado"});
        
        } catch (error) {

            res.json(error);

        };

    },

};