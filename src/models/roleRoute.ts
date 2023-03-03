/*
    * Configuração Role CRUD routes
*/

// Importando o express e configurando o router 
import express, {Request, Response} from 'express';
const roleRouter = express.Router();

// Importando o prisma client e configurando
import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

roleRouter.post('/roles/add', async (req: Request, res: Response) => {

    const roleTitle: string = req.body;

    const regRole = await prisma.role.create({
        data: {
            roleTitle: roleTitle
        }
    });

    return regRole;

});

roleRouter.get('/roles/request', async (req: Request, res: Response) => {

    const reqRole = await prisma.role.findMany();

    return reqRole;
    
});

roleRouter.get('/roles/request/guid_role', async (req: Request, res: Response) => {

    const guid_role = req.params.guid_role;

    const reqRoleId = await prisma.role.findUnique({
        where: {
            guid_role: guid_role
        },
    });

    return reqRoleId;

});

roleRouter.patch('/roles/update/guid_role', async (req: Request, res: Response) => {

    const guid_role = req.params.guid_role;

    const roleTitle: string = req.body;

    const updtRole = await prisma.role.update({
        where: {
            guid_role: guid_role
        },
        data: {
            roleTitle: roleTitle
        },
    });

    return updtRole;

});

roleRouter.delete('/roles/update/guid_role', async (req: Request, res: Response) => {
    const guid_role = req.params.guid_role;

    const delRole = await prisma.role.delete({
        where: {
            guid_role: guid_role
        },
    });

    return delRole;

});

export { roleRouter };