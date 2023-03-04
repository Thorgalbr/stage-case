/* 
    * Arquivo roleController referente aos controllers da rota da tabela de roles
*/

// Importando o Request e Response do express

import {Request, Response} from 'express';

// Importando o prisma client e configurando

import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

// Importando a interface IRoles para configurar os datatypes

import { IRoles } from './rolesRoute';


// Exportando os controllers para a rota

export default {

    async createRole(req: Request, res: Response) {

        try {
            
            const { roleTitle }: IRoles = req.body;

            if(!roleTitle) {

                res.status(422).json({erro:"O nome da role é obrigatório!"});
                
            };

            let roleTitleCheck = await prisma.role.findUnique({
                
                where: {

                    roleTitle

                },
            });
    
            if(roleTitleCheck) {

                return res.json({error: "Esta role já existe!"});

            };

            const regRole = await prisma.role.create({

                data: {

                    roleTitle: roleTitle

                }

            });
        
            return res.status(201).json(regRole);

        } catch (error) {

            res.status(400).json({erro:"Não foi possível adicionar a role"});

        };
    
    },

    async findAllRoles(req: Request, res: Response) {

        try {

            const reqRoles = await prisma.role.findMany();
    
            return res.status(200).json(reqRoles);

        } catch (error) {

            res.status(404).json(error);

        };

    },

    async findRole(req: Request, res: Response) {

        try {

            const guid_role = req.params.guid_role;

            const reqRoleGuid = await prisma.role.findUnique({

                where: {

                    guid_role

                },

            });
        
            return res.status(200).json(reqRoleGuid);
        
        } catch (error) {

            res.status(404).json(error);

        };

    },

    async updateRole(req: Request, res: Response) {

        try {

            const guid_role = req.params.guid_role;

            const { roleTitle }: IRoles = req.body;

        if(!guid_role) {

            res.status(422).json({erro:"O GUID da role é obrigatório!"});

        };

        if(!roleTitle) {

            res.status(422).json({erro:"O nome da role é obrigatório!"});

        };

            const updtRole = await prisma.role.update({

                where: {
    
                    guid_role
    
                },
                data: {
    
                    roleTitle
    
                },
    
            });
        
            return res.status(201).json(updtRole);

        } catch (error) {

            res.status(400).json(error);

        };

    },

    async deleteRole(req: Request, res: Response) {

        try {

            const guid_role = req.params.guid_role;

            if(!guid_role) {

                res.status(422).json({erro:"O GUID da role é obrigatório!"});
                
            };
    
            const delRole = await prisma.role.delete({

                where: {

                    guid_role: guid_role

                },

            });
        
            return res.status(200).json({message:"Role deletada!"});
        
        } catch (error) {

            res.status(400).json(error);

        };

    },
};