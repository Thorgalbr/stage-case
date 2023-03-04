/* 
    * Arquivo role/Permission Controller referente as rotas de role e permissions
*/

// Importando o Request e Response do express

import {Request, Response} from 'express';

// Importando o prisma client

import { prisma } from '../utils/prisma';

// Exportando os controllers para a rota

export default {

    async createRolePermission(req: Request, res: Response) {

        try {

            const { guid_permission, guid_role } = req.params;

            const roleGuid = await prisma.role.findUnique({
    
                where: {
    
                    guid_role
    
                },
    
            });
    
            const permGuid = await prisma.permission.findUnique({
    
                where: {
    
                    guid_permission
    
                },
    
            });
    
            if(!permGuid){
    
                res.status(422).json({error:"GUID de permissão não encontrado"});
    
            };
    
            if(!roleGuid){
    
                res.status(422).json({error:"GUID de roles não encontrado"});
    
            };
            
            const rolePermReg = await prisma.role_permission.create({
    
                data: {
    
                    permission_guid: guid_permission,
                    role_guid: guid_role

                },
                
            });
        
            res.status(201).json(rolePermReg);
        
        } catch (error) {

            res.status(400).json(error);

        };

    },

    async findAllRolePermission(req: Request, res: Response) {

        try {

            const rolePermReq = await prisma.role_permission.findMany();
    
            res.status(200).json(rolePermReq);
        
        } catch (error) {

            res.status(404).json(error);

        };

    },

    async findRolePermission(req: Request, res: Response) {

        try {

            const { guid_role_perm } = req.params;

            const checkRolePermId = await prisma.role_permission.findUnique({
    
                where: {
    
                    guid_role_perm
    
                },
    
            });
    
            if(!checkRolePermId){
    
                res.status(422).json({message:"GUID role/Permission não encontrado"});
    
            };
        
            const rolePermReqId = await prisma.role_permission.findUnique({
    
                where: {
    
                    guid_role_perm: guid_role_perm
    
                },
            });
        
            res.status(200).json(rolePermReqId);
        
        } catch (error) {

            res.status(404).json(error);

        };

    },

    async updateRolePermission(req: Request, res: Response) {

        try {

            const { guid_role_perm } = req.params;

            const checkRolePermId = await prisma.role_permission.findUnique({
    
                where: {
    
                    guid_role_perm
    
                },
    
            });
    
            if(!checkRolePermId){
    
                res.status(422).json({message:"GUID role/Permission não encontrado"});
    
            };
        
            const { guid_permission, guid_role } = req.params;
    
            const roleGuid = await prisma.role.findUnique({
    
                where: {
    
                    guid_role
    
                },
    
            });
    
            const permGuid = await prisma.permission.findUnique({
    
                where: {
    
                    guid_permission
    
                },
    
            });
    
            if(!permGuid){
    
                res.status(422).json({error:"GUID de permissão não encontrado"});
    
            };
    
            if(!roleGuid){
    
                res.status(422).json({error:"GUID de roles não encontrado"});
    
            };
        
            const rolePermUpdt = await prisma.role_permission.update({
    
                where: {
    
                    guid_role_perm: guid_role_perm
    
                },
                data: {
    
                    permission_guid: guid_permission,
                    role_guid: guid_role
    
                }
    
            });
        
            res.status(201).json(rolePermUpdt);
        
        } catch (error) {

            res.status(400).json(error);

        };

    },

    async deleteRolePermission(req: Request, res: Response) {

        try {

            const guid_role_perm = req.params.guid_role_perm;

            const checkRolePermId = await prisma.role_permission.findUnique({
        
                where: {
    
                    guid_role_perm
    
                },
    
            });
    
            if(!checkRolePermId) {
    
                res.status(422).json({message:"GUID role/Permission não encontrado"});
    
            };
        
            const rolePermDel = await prisma.role_permission.delete({
    
                where: {
    
                    guid_role_perm: guid_role_perm
    
                },
    
            });
        
            res.status(200).json({message:"Dados de role_permission deletados com sucesso"});
        
        } catch (error) {

            res.status(400).json(error);

        };

    },
};