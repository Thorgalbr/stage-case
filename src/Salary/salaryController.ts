/*
  	 Arquivo salaryController referente aos controllers da rota da tabela de salários
                  Autor: Thiago Pereira
 */

// Importando o Request e Response do express

import { Request, Response } from "express";

// Importando e configurando o prisma client

import { Decimal } from "@prisma/client/runtime";
import { prisma } from "../utils/prisma";

// Exportando os controllers para a rota

export default {

	// Rota de POST/CREATE
	async createSalary(req: Request, res: Response) {

		/*
			Rota de registro de salários
			Formato da rota: "/salary/add"
	 		Formato aceito dos dados em JSON:
	 		{
				"salary":2000.00,
			}
		*/

		try {
			// Recebendo os dados para registro do body
			const salary: Decimal = req.body;

			// Validação dos dados recebidos do body
			if (!salary) {
				res.status(422).json({ erro: "Valor do salário obrigatorio" });
			};
			// Configurando o prisma para efetuar o registro do novo valor de salário
			const salReg = await prisma.salary.create({
				data: {
					salary: salary,
				},
			});
			// Resposta retorna os dados inseridos
			res.status(201).json(salReg);
		} catch (error) {
			// Se não obter sucesso retorna esta mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de GET/REQUEST
	async findAllSalary(req: Request, res: Response) {

		/*
			Rota de request de todos dados da tabela de salários
			Formato da rota: "/salary/request"
		*/

		try {
			// Configurando o prisma para retornar todos os salários da tabela
			const salReq = await prisma.salary.findMany();
			// Retorna em caso de sucesso a lista dos salários
			res.status(200).json(salReq);
		} catch (error) {
			// Caso não obtenha sucesso retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},
	
	// Rota de GET/REQUEST filtrando pelo GUID
	async findSalary(req: Request, res: Response) {

	/* 
		Rota de GET/REQUEST pelo GUID retornando um registro
		Formato do request requer o GUID do salário
		Formato guid_salary = "8d695e19-3422-4990-b70c-d3772efb9c38"
		Exemplo da rota: "/salary/request/:guid_salary"
	*/

		try {
			// Recebendo o GUID do salário dos params
			const { guid_salary } = req.params;

			if (!guid_salary) {
				res.status(422).json({ erro: "O GUID do salário é obrigatorio" });
			};
			// Configurando o prisma para retornar um salário baseando no GUID
			const salReqId = await prisma.salary.findUnique({
				where: {
					guid_salary: guid_salary,
				},
			});

			// Validação da existência do usuário no banco de dados
			if (!salReqId) {
				res.status(422).json({ erro: "Salário não encontrado" });
			};
			// Resposta retorna os dados referente ao salário filtrado
			res.status(200).json(salReqId);
		} catch (error) {
			// Em caso de falha retorna uma mensagem de erro
			res.status(404).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de PATCH/UPDATE
	async updateSalary(req: Request, res: Response) {

		/*
			Rota de PATCH/UPDATE dos registros de salários
			Requer o GUID do usuário para atualização
			Formato guid_salary = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Exemplo da rota: "/salary/update/:guid_salary"

			Formato aceito dos dados em JSON:

	 		{
				"salary":2000.00,
			}
 
		*/

		try {
			// Recebendo o GUID do salário dos params
			const { guid_salary } = req.params;
			// Validação do dado recebido do params
			if (!guid_salary) {
				res.status(422).json({ erro: "O GUID do salário é obrigatorio" });
			};
			// Configurando o prisma para checar a existência do salário
			const checkSalGuid = await prisma.salary.findUnique({
				where: {
					guid_salary,
				},
			});
			// Caso não exista usuário retorna uma mensagem de erro
			if (!checkSalGuid) {
				res.status(422).json({ erro: "Salário inexistente" });
			};
			// Recebendo os dados do body
			const salary: Decimal = req.body;
			// Validação da existência do dado recebido do body
			if (!salary) {
				res.status(422).json({ erro: "Valor do salário obrigatorio" });
			};
			// Configurando o prisma para a atualização do dado
			const salUpdt = await prisma.salary.update({
				where: {
					guid_salary: guid_salary,
				},
				data: {
					salary: salary,
				},
			});
			// Em caso de sucesso retorna os dados atualizados
			res.status(201).json(salUpdt);
		} catch (error) {
			// Caso aconteça algum erro retorna uma mensagem informando
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},

	// Rota de DELETE
	async deleteSalary(req: Request, res: Response) {
		
		/*
			Rota de DELETE dos registros de salários
			Requer o GUID do salário 
			Formato guid_salary = "8d695e19-3422-4990-b70c-d3772efb9c38"
			Formato da rota: "/salary/delete/:guid_salary"

		*/

		try {
			// Recebendo o GUID do salário dos params
			const { guid_salary } = req.params;

			// Validação do dado recebido do params, retornando erro caso o GUID não seja inserido
			if (!guid_salary) {
				res.status(422).json({ erro: "GUID de salário obrigatório" });
			};

			// Configurando o prisma para checar a existência do salário
			const checkSalId = await prisma.salary.findUnique({
				where: {
					guid_salary,
				},
			});
			// Caso não exista o salário retorna uma mensagem de erro
			if (!checkSalId) {
				res.status(422).json({ erro: "Salário inexistente" });
			};
			// Configurando o prisma para deletar os dados do salário
			const salDel = await prisma.salary.delete({
				where: {
					guid_salary: guid_salary,
				},
			});
			// Em caso de sucesso retorna uma mensagem informando que o usuário foi deletado
			res.status(200).json({ message: "Salário deletado" });
		} catch (error) {
			// Caso falhe retorna uma mensagem de erro
			res.status(400).json({ error:"Ocorreu um erro!" });
		};
	},
};
