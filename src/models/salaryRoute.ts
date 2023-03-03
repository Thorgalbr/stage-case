/*
    * Configuração Salary CRUD routes
*/

// Importando o express e configurando o router 
import express, {Request, Response} from 'express';
const salRouter = express.Router();

// Importando o prisma client e configurando
import { PrismaClient } from '../../prisma/prismaClient'
import { Decimal } from '@prisma/client/runtime';
const prisma = new PrismaClient();

salRouter.post('/salary/add', async (req: Request, res: Response) => {

    const salary: Decimal = req.body;

    const salReg = await prisma.salary.create({
        data: {
            salary: salary
        },
    });

    res.json(salReg);

});

salRouter.get('/salary/request', async (req: Request, res: Response) => {

    const salReq = await prisma.salary.findMany();

    res.json(salReq);

});

salRouter.get('/salary/request/guid_salary', async (req: Request, res: Response) => {

    const guid_salary = req.params.guid_salary;

    const salReqId = await prisma.salary.findUnique({
        where: {
            guid_salary: guid_salary
        },
    });

    res.json(salReqId);

});

salRouter.patch('/salary/update/guid_salary', async (req: Request, res: Response) => {

    const guid_salary = req.params.guid_salary;

    const salary: Decimal = req.body;

    const salUpdt = await prisma.salary.update({
        where: {
            guid_salary: guid_salary
        },
        data: {
            salary: salary
        }
    });

    res.json(salUpdt);

});

salRouter.patch('/salary/delete/guid_salary', async (req: Request, res: Response) => {
    
    const guid_salary = req.params.guid_salary;

    const salDel = await prisma.salary.delete({
        where: {
            guid_salary: guid_salary
        },
    });

    res.json(salDel);

});

export { salRouter };