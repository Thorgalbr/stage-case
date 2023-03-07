/*
 * 		Configuração inicial do projeto
 *         		Stage - Case
 *      	Autor: Thiago Pereira
 */

// Importando o AdminJS para o projeto
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express"

// Importando o express para o projeto 
import express, { Request, Response } from "express";

// Importando o body-parser para o projeto
import bodyParser from "body-parser";

// Importando o Dotenv para o projeto
import "dotenv/config";

// Importando o Cors para o projeto para permitir acesso do front-end
/*
import cors from "cors";
app.use(cors());
*/

// Configurando o express para comunicar com o AdminJS
const app = express();
const admin = new AdminJS({});
const adminRouter = AdminJSExpress.buildRouter(admin);
app.use(admin.options.rootPath, adminRouter);

// Configurando o body parser para recebermos os parametros via url

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

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
	console.log(`AdminJS iniciado em htttp://localhost:${port}${admin.options.rootPath}`);
});

// Rota de teste da API
app.get("/teste", (req: Request, res: Response) => {
	res.json({ message: "API funcionando!!!" });
});
