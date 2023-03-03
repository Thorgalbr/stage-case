/*
    * Configuração Role/Permission CRUD routes
*/

// Importando o express e configurando o router 
import express, {Request, Response} from 'express';
const rolePermRouter = express.Router();

// Importando o prisma client e configurando
import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

interface IRolePerm{
    permission_guid: string,
    role_guid: string
};

rolePermRouter.post('/role-permission/add', async (req: Request, res: Response) => {

    const { permission_guid, role_guid }: IRolePerm = req.body;
    
    const rolePermReg = await prisma.role_permission.create({
        data: {
            permission_guid: permission_guid,
            role_guid: role_guid
        },
    });

    res.json(rolePermReg);

});

rolePermRouter.get('/role-permission/request', async (req: Request, res: Response) => {

    const rolePermReq = await prisma.role_permission.findMany();

    res.json(rolePermReq);

});

rolePermRouter.get('/role-permission/request/guid_role_perm', async (req: Request, res: Response) => {

    const guid_role_perm = req.params.guid_role_perm;

    const rolePermReqId = await prisma.role_permission.findUnique({
        where: {
            guid_role_perm: guid_role_perm
        },
    });

    res.json(rolePermReqId);

});

rolePermRouter.patch('/role-permission/update/guid_role_perm', async (req: Request, res: Response) => {

    const guid_role_perm = req.params.guid_role_perm;

    const { permission_guid, role_guid }: IRolePerm = req.body;

    const rolePermUpdt = await prisma.role_permission.update({
        where: {
            guid_role_perm: guid_role_perm
        },
        data: {
            permission_guid: permission_guid,
            role_guid: role_guid
        }
    });

    res.json(rolePermUpdt);

});

rolePermRouter.delete('/role-permission/delete/guid_role_perm', async (req: Request, res: Response) => {

    const guid_role_perm = req.params.guid_role_perm;

    const rolePermDel = await prisma.role_permission.delete({
        where: {
            guid_role_perm: guid_role_perm
        },
    });

    res.json(rolePermDel);

});

export { rolePermRouter };