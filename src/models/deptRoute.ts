/*
    * Configuração Departments CRUD routes
*/

// Importando o express e configurando o router 
import express, {Request, Response} from 'express';
const deptRouter = express.Router();

// Importando o prisma client e configurando
import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();


deptRouter.post('/departments/add', async (req: Request, res: Response) => {

    const deptName: string = req.body;

    const deptReg = await prisma.departments.create({
        data: {
            deptName: deptName
        }
    });

    return deptReg;

});

deptRouter.get('/departments/request', async (req: Request, res: Response) => {

    const deptReq = await prisma.departments.findMany();

    return deptReq;

});

deptRouter.get('/departments/request/guid_dept', async (req: Request, res: Response) => {

    const guid_dept = req.params.guid_dept;

    const deptReqId = await prisma.departments.findUnique({
        where: {
            guid_dept: guid_dept
        }

    });

    return deptReqId;

});

deptRouter.patch('/departments/update/guid_dept', async (req: Request, res: Response) => {

    const guid_dept = req.params.guid_dept;

    const deptName: string = req.body;

    const deptUpdt = await prisma.departments.update({
        where: {
            guid_dept: guid_dept
        },
        data: {
            deptName: deptName
        },
    });

    return deptName;

});

deptRouter.delete('/departments/delete/guid_dept', async (req: Request, res: Response) => {

    const guid_dept = req.params.guid_dept;

    const deptDel = await prisma.departments.delete({
        where: {
            guid_dept: guid_dept
        },
    });

    return deptDel;

});

export { deptRouter };