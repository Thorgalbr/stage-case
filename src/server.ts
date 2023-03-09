/*
 * 		Configuração inicial do projeto
 *         		Stage - Case
 *      	Autor: Thiago Pereira
 */

// Importando o express para o projeto 
import express, { Request, Response } from "express";

// Configurando o express para comunicar com o AdminJS
const app = express();

// Importando o body-parser para o projeto
import bodyParser from "body-parser";

// Importando o Cors para o projeto para permitir acesso do front-end
import cors from "cors";

// Importando o Dotenv para o projeto
import "dotenv/config";

// Configurando o body parser para recebermos os parametros via url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// Conectando o cors com o express para expor a api
app.use(cors());

// Importando as rotas para o index e passando para o express via variavel app

import { authRouter } from "./Authentication/authRouter";
app.use(authRouter);

import { userRouter } from "./user/userRoute";
app.use(userRouter);

import { deptRouter } from "./departments/departamentRoute";
app.use(deptRouter);

import { deptEmpRouter } from "./dept-employee/deptempRoute";
app.use(deptEmpRouter);

import { employeesRouter } from "./employees/employeesRoute";
app.use(employeesRouter);

import { projectRouter } from "./projetos/projectsRoute";
app.use(projectRouter);

// Configurando a criação do servidor com retorno de mensagem no console informando o sucesso
const port = process.env.API_PORT;
app.listen(port, () => {
	console.log(`Servidor iniciado na porta:${port}`);
});

// Rota de teste da API
app.get("/teste", (req: Request, res: Response) => {
	res.json({ message: "API funcionando!!!" });
});
