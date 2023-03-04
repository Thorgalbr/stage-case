/* 
    * Arquivo userController referente aos controllers da rota de usuários
*/

// Importando o Request e Response do express

import {Request, Response} from 'express';

// Importando o prisma client e configurando

import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

// Importando a interface IUser para configurar os datatypes

import { IUser } from './userRoute';

// Exportando os controllers para a rota

export default {

    async createUser(req: Request, res: Response) {

        try {

            const { firstName, lastName, email, password }: IUser = req.body;

            const guid_role = req.params.guid_role;

            if(!firstName || !lastName) {

                res.status(422).json({erro:"Nome e sobrenome obrigatorios!"});

            };

            if(!email || !password) {

                res.status(422).json({erro:"email e senha obrigatorios!"}); 

            };

            if(!guid_role){

                res.status(422).json({erro:"GUID role obrigatorio!"}); 

            };

            const reqRoleGuid = await prisma.role.findUnique({

                where: {

                    guid_role

                },

            });

            let emailCheck = await prisma.user.findUnique({
                
                where: {

                    email

                },
            });
    
            if(emailCheck) {

                return res.status(422).json({error: "Este usuário já existe!"});

            };
    
            const userReg = await prisma.user.create({

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
        
            return res.status(201).json(userReg);
    
        } catch (error) {

            return res.status(400).json({error});

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

                res.status(404).json(error);

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

                res.status(422).json({erro:"Usuário não encontrado"});

            };
        
            return res.status(200).json(userReqId);
        
        } catch (error) {

            res.status(404).json(error);
 
        };
        
},

async updateUser(req: Request, res: Response) {

    try {

        const guid_user = req.params.guid_user;

        if(!guid_user) {

            res.status(422).json({erro:"Usuário não encontrado"});

        };

        const { firstName, lastName, email, password }: IUser = req.body;

        const guid_role = req.params.guid_role;

            if(!firstName || !lastName) {

                res.status(422).json({erro:"Nome e sobrenome obrigatorios!"});

            };

            if(!email || !password) {

                res.status(422).json({erro:"email e senha obrigatorios!"}); 

            };

            if(!guid_role){

                res.status(422).json({erro:"GUID role obrigatorio!"}); 

            };

        const reqRoleGuid = await prisma.role.findUnique({

            where: {

                guid_role

            },

        });
    
        const userUpdt = await prisma.user.update({

            where: {

                guid_user: guid_user

            },
            data: {

                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                role_guid: guid_role

            },

        });
    
        return res.status(201).json(userUpdt);

    } catch (error) {

        res.status(400).json(error);

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
    
        return res.status(200).json({message: "Usuário Deletado!"});
    
    } catch (error) {

        res.status(400).json(error);

    };

},

};

