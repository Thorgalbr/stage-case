/* 
    * Arquivo userController referente aos controllers da rota de usuários
*/

// Importando o Request e Response do express

import {Request, Response} from 'express';

// Importando o prisma client e configurando

import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

// Importando a interface IUser para configurar os datatypes

import { IUser } from '../models/userRoute';

// Exportando o controle das rotas

export default {

    async createUser(req: Request, res: Response) {

        try {

            const {firstName, lastName, email, password}: IUser = req.body;

            const guid_role = req.params.guid_role;

            const roleReqId = await prisma.role.findUnique({
                where: {
                    guid_role
                }
            });

            if(!roleReqId) {

                res.status(422).json({error:"Role inexistente"});
                
            };
    
            let userReg = await prisma.user.findUnique({
                where: {
                    email
                },
            });
    
            if(email) {

                return res.json({error: "Este usuário já existe!"});

            };
    
            userReg = await prisma.user.create({
                data: {
                   firstName: firstName,
                   lastName,
                   email, 
                   password,
                   role_guid: guid_role
                },
                include: {
                    role: true
                },
            });
        
            return res.status(200).json(userReg);
    
        } catch (error) {
            return res.json({error});
        };
    
    },

    async findAllUsers(req: Request, res: Response){

            try {

                const userReq = await prisma.user.findMany();

                if(!userReq) {
                    res.status(422).json({erro:"Usuários não encontrados"});
                };
        
                return res.status(200).json(userReq)
            
            } catch (error) {

                res.json(error);

            };

    },

    async findUser(req: Request, res: Response) {

        try {

            const guid_user = req.params.guid_user;
    
            const userReqId = await prisma.user.findUnique({
                where: {
                    guid_user: guid_user
                },
            });

            if(!userReqId) {
                res.status(422).json({erro:"Usuário não encontrado"})
            };
        
            return res.status(200).json(userReqId);
        
        } catch (error) {

            res.json(error);

        };
        
},

async updateUser(req: Request, res: Response) {

    try {

        const guid_user = req.params.guid_user;

        if(!guid_user) {
            res.status(422).json({erro:"Usuário não encontrado"})
        };

        const { firstName, lastName, email, password }: IUser = req.body;

        const role_guid = req.params.role_guid;

        const roleReqId = await prisma.role.findUnique({
            where: {
                guid_role: role_guid
            },
        });

        if(!roleReqId) {

            res.status(422).json({error:"Role inexistente"});
            
        };
    
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
    
        return res.status(200).json(userUpdt);

    } catch (error) {

        res.json(error);

    };

},

async deleteUser(req: Request, res: Response) {

    const guid_user = req.params.guid_user;

    try {

        const userDel = await prisma.user.delete({
            where: {
                guid_user: guid_user
            },
        });
    
        return res.status(200).json({Message: "Usuário Deletado!"});
    
    } catch (error) {
        res.json(error);
    }

},

};

