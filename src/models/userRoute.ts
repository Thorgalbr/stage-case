/*
    * Configuração Users CRUD routes
*/

// Importando o express e configurando o router 
import express, {Request, Response} from 'express';
const userRouter = express.Router();

// Importando o prisma client e configurando
import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

interface IUser{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role_guid: string
};

userRouter.post('/user/add', async (req: Request, res: Response) => {

    const { firstName, lastName, email, password, role_guid }: IUser = req.body;

    const userReg = await prisma.user.create({
        data: {
           firstName: firstName,
           lastName: lastName,
           email: email,
           password: password,
           role_guid: role_guid 
        },
    });

    return userReg;

});


userRouter.get('/user/request', async (req: Request, res: Response) => {
    
    const userReq = await prisma.user.findMany();

    return userReq;

});

userRouter.get('/user/request/guid_user', async (req: Request, res: Response) => {
    
    const guid_user = req.params.guid_user;

    const userReqId = await prisma.user.findUnique({
        where: {
            guid_user: guid_user
        },
    });

    return userReqId;

});

userRouter.patch('/user/update/guid_user', async (req: Request, res: Response) => {

    const guid_user = req.params.guid_user;

    const { firstName, lastName, email, password, role_guid }: IUser = req.body;

    const userUpdt = await prisma.user.update({
        where: {
            guid_user: guid_user
        },
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role_guid: role_guid 
        },
    });

    return userUpdt;

});

userRouter.delete('/user/delete/guid_user', async (req: Request, res: Response) => {

    const guid_user = req.params.guid_user;

    const userDel = await prisma.user.delete({
        where: {
            guid_user: guid_user
        },
    });

    return userDel;

});

export { userRouter };


