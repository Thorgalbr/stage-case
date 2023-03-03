/*
    * Configuração Permission CRUD routes
*/

// Importando o express e configurando o router 
import express, {Request, Response} from 'express';
const permitRouter = express.Router();

// Importando o prisma client e configurando
import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

permitRouter.post('/permission/add', async (req: Request, res: Response) => {

    const permTitle = req.body;

    const regPermit = await prisma.permission.create({
        data: {
            permTitle: permTitle,
        },
    });

    return regPermit;

});

permitRouter.get('/permission/request', async (req: Request, res: Response) => {

    const reqPermit = await prisma.permission.findMany();

    return reqPermit;

});

permitRouter.get('/permission/request/guid_permit', async (req: Request, res: Response) => {

    const guid_permit = req.params.guid_permit;

    const reqPermitId = await prisma.permission.findUnique({
        where: {
            guid_permission: guid_permit
        },
    });

    return reqPermitId;

});

permitRouter.patch('/permission/update/guid_permit', async (req: Request, res: Response) => {

    const guid_permit = req.params.guid_permit;

    const permTitle: string = req.body;

    const updtPermit = await prisma.permission.update({

        where: {
            guid_permission: guid_permit
        },
        data: {
            permTitle: permTitle
        },
        
    });

    return updtPermit;

});

permitRouter.delete('/permission/delete/guid_permit', async (req: Request, res: Response) => {

    const guid_permit = req.params.guid_permit;

    const delPermit = await prisma.permission.delete({
        where: {
            guid_permission: guid_permit
        },
    });

    return delPermit;

});


export { permitRouter };