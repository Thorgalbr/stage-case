/* 
    * Arquivo roleController referente aos controllers da rota da tabela de roles
*/

// Importando o Request e Response do express

import {Request, Response} from 'express';

// Importando o prisma client e configurando

import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

// Exportando os controllers para a rota

export default {

    async createRole (req: Request, res: Response) {

        const roleTitle: string = req.body;

        if(roleTitle) {

            res.json({erro: "Esta role já existe!"})
            
        };

        try {

            const regRole = await prisma.role.create({
                data: {
                    roleTitle: roleTitle
                }
            });
        
            return regRole;

        } catch (error) {
            res.json(error)
        }
    
    },

    async findAllRoles(req: Request, res: Response) {

        try {

            const reqRole = await prisma.role.findMany();
    
            return res.status(200).json(reqRole);

        } catch (error) {

            res.json(error);

        }

    },

    async findRole(req: Request, res: Response) {

        const guid_role = req.params.guid_role;
    
        if(!guid_role) {

            res.status(422).json({erro: "Esta role não foi encontrada"});

        };

        try {

            const reqRoleId = await prisma.role.findUnique({
                where: {
                    guid_role: guid_role
                },
            });
        
            return res.status(200).json(reqRoleId);
        
        } catch (error) {

            res.json(error);

        };

    },

    async updateRole (req: Request, res: Response) {

        try {

            const guid_role = req.params.guid_role;
    
            const roleTitle: string = req.body;

            const checkRoleGuid = await prisma.role.findUnique({
                where: {

                    guid_role,

                }
                
            });

            if(!checkRoleGuid){

                res.json({erro: "Esta role GUID não existe..."});

            };

            const updtRole = await prisma.role.update({

                where: {
    
                    guid_role: guid_role
    
                },
                data: {
    
                    roleTitle: roleTitle
    
                },
    
            });
        
            return res.status(200).json(updtRole);

        } catch (error) {

            res.json(error);

        };

    },

    async deleteRole (req: Request, res: Response){

        try {

            const guid_role = req.params.guid_role;

            const checkRoleGuid = await prisma.role.findUnique({
                where: {

                    guid_role,

                }
                
            });

            if(!checkRoleGuid){

                res.json({erro: "Esta role GUID não existe..."});

            };
    
            const delRole = await prisma.role.delete({

                where: {

                    guid_role: guid_role

                },
            });
        
            return res.json({Message:"Role deletada!"});
        
        } catch (error) {

            res.json(error);

        };

    },
};