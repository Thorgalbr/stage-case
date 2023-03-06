/*
 * Arquivo departmentsController referente aos controllers da rota da tabela de departamentos
 */

// Importando o Request e Response do express

import { Request, Response } from "express";

// Importando o prisma client e configurando

import { prisma } from "../utils/prisma";

// Exportando os controllers para a rota

export default {
	async createDepartment(req: Request, res: Response) {
		try {
			const deptName: string = req.body;

			const checkDeptName = await prisma.departments.findUnique({
				where: {
					deptName,
				},
			});

			if (checkDeptName) {
				res.status(422).json({ erro: "Este departamento já existe!" });
			};

			const deptReg = await prisma.departments.create({
				data: {
					deptName: deptName,
				},
			});

			return res.status(200).json(deptReg);
		} catch (error) {
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	async findAllDepartments(req: Request, res: Response) {
		try {
			const deptReq = await prisma.departments.findMany();

			return res.status(200).json(deptReq);
		} catch (error) {
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	async findDepartment(req: Request, res: Response) {
		try {
			const guid_dept = req.params.guid_dept;

			const deptReqId = await prisma.departments.findUnique({
				where: {
					guid_dept: guid_dept,
				},
			});

			return res.status(200).json(deptReqId);
		} catch (error) {
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	async updateDepartment(req: Request, res: Response) {
		try {
			const guid_dept = req.params.guid_dept;

			const deptName: string = req.body;

			const checkDeptId = await prisma.departments.findUnique({
				where: {
					guid_dept,
				},
			});

			if (!checkDeptId) {
				res.status(422).json({ erro: "Este departamento não existe!" });
			};

			const deptUpdt = await prisma.departments.update({
				where: {
					guid_dept: guid_dept,
				},
				data: {
					deptName: deptName,
				},
			});

			return res.status(200).json(deptUpdt);
		} catch (error) {
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	async deleteDepartment(req: Request, res: Response) {
		try {
			const guid_dept = req.params.guid_dept;

			const checkDeptId = await prisma.departments.findUnique({
				where: {
					guid_dept,
				},
			});

			if (!checkDeptId) {
				res.status(422).json({ erro: "Este departamento não existe!" });
			};

			const deptDel = await prisma.departments.delete({
				where: {
					guid_dept: guid_dept,
				},
			});

			return deptDel;
		} catch (error) {
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},
};
