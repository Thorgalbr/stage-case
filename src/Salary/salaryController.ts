/* 
    * Arquivo salaryController referente aos controllers da rota da tabela de salários
*/

// Importando o Request e Response do express

import {Request, Response} from 'express';

// Importando o prisma client

import { prisma } from '../utils/prisma';

// Exportando os controllers para a rota

export default {

    async createSalary(req: Request, res: Response) {

    try {

        const salary: string = req.body;

        if(!salary) {

            res.status(422).json({erro:"Valor do salário obrigatorio"});

        };
    
        const salReg = await prisma.salary.create({

            data: {

                salary: salary

            },

        });
    
        res.status(201).json(salReg);
    
    } catch (error) {

        res.status(400).json(error);

    };
    
    },

    async findAllSalary(req: Request, res: Response) {

        try {

            const salReq = await prisma.salary.findMany();
    
            res.status(200).json(salReq);
         
        } catch (error) {

            res.status(404).json(error);

        };

    },

    async findSalary(req: Request, res: Response) {

        try {

            const { guid_salary } = req.params;

            if(!guid_salary){

                res.status(422).json({erro:"O GUID do salário é obrigatorio"});

            };
 
            const salReqId = await prisma.salary.findUnique({

                where: {

                    guid_salary: guid_salary

                },

            });
        
            res.status(200).json(salReqId);
        
        } catch (error) {

            res.status(404).json(error);

        };

    },

    async updateSalary(req: Request, res: Response) {

        try {

            const { guid_salary } = req.params;

            if(!guid_salary){

                res.status(422).json({erro:"O GUID do salário é obrigatorio"});

            };

            const checkSalGuid = await prisma.salary.findUnique({

                where: {

                    guid_salary

                },

            });

            if(!checkSalGuid) {

                res.status(422).json({erro:"Salário inexistente"});

            };
    
            const salary: string = req.body;

            if(!salary) {

                res.status(422).json({erro:"Valor do salário obrigatorio"});
                
            };
        
            const salUpdt = await prisma.salary.update({

                where: {

                    guid_salary: guid_salary

                },
                data: {

                    salary: salary

                }

            });
        
            res.status(201).json(salUpdt);
        
        } catch (error) {

            res.status(400).json(error);

        };

    },

    async deleteSalary(req: Request, res: Response) {

        try {

            const { guid_salary } = req.params;

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

            res.status(400).json(error);

        };

    },

};