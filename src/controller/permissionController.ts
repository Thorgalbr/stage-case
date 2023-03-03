/* 
    * Arquivo permissionController referente aos controllers da rota da tabela de permissions
*/

// Importando o Request e Response do express

import {Request, Response} from 'express';

// Importando o prisma client e configurando

import { PrismaClient } from '../../prisma/prismaClient'

const prisma = new PrismaClient();

export default {

    async createPermission (req: Request, res: Response){

        try {

            const permTitle: string = req.body;

            let checkPermId = await prisma.permission.findUnique({

                where: {

                    permTitle

                },

            });

            if(checkPermId) {

                res.status(422).json({erro: "Esta permissão já existe!"});

            };
    
            const regPermit = await prisma.permission.create({

                data: {

                    permTitle: permTitle,

                },

            });
        
            return res.status(200).json(regPermit);
        
        } catch (error) {

            res.json(error);

        };

    },

    async findAllPermissions (req: Request, res: Response){

        try {

            const reqPermit = await prisma.permission.findMany();
    
            return res.status(200).json(reqPermit);
        
        } catch (error) {

            res.json(error);

        };

    },

    async findPermission (req: Request, res: Response) {

        const guid_permission = req.params.guid_permission;

        const guidCheckPermit = await prisma.permission.findUnique({
            where: {
                guid_permission
            },
        });

        if(!guidCheckPermit){
            res.status(422).json({error: "Este GUID de permissão não existe"});
        };
    
        const reqPermitId = await prisma.permission.findUnique({

            where: {

                guid_permission: guid_permission

            },

        });
    
        return res.status(200).json(reqPermitId);
    
    },

    async updatePermission (req: Request, res: Response){

        const guid_permission = req.params.guid_permission;

        const guidCheckPermit = await prisma.permission.findUnique({
            where: {
                guid_permission
            },
        });

        if(!guidCheckPermit){

            res.status(422).json({error: "Este GUID de permissão não existe"});

        };
    
        const permTitle: string = req.body;
    
        const updtPermit = await prisma.permission.update({
    
            where: {

                guid_permission: guid_permission

            },
            data: {

                permTitle: permTitle

            },
            
        });
    
        return res.status(200).json(updtPermit);
    
    },

    async deletePermission (req: Request, res: Response){

        const guid_permission = req.params.guid_permission;

        const guidCheckPermit = await prisma.permission.findUnique({

            where: {

                guid_permission

            },

        });

        if(!guidCheckPermit){

            res.status(422).json({error: "Este GUID de permissão não existe"});

        };
    
        const delPermit = await prisma.permission.delete({

            where: {

                guid_permission: guid_permission

            },

        });
    
        return res.status(200).json({Message: "A permissão foi deletada!"});
    
    },

};