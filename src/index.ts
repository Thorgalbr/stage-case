/*
 * Configuração inicial do projeto
 *         Stage - Case
 *      Autor: Thiago Pereira
 */

// Importando o express para o projeto e configurando na variavel app

import express, { Request, Response } from "express";
const app = express();

// Importando o body-parser para o projeto

import bodyParser from "body-parser";

// Configurando o body parser para recebermos os parametros via url

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Importando o Dotenv para o projeto

import "dotenv/config";

// Importando o Cors para o projeto para permitir acesso do front-end

import cors from "cors";
app.use(cors());

// Importando as rotas para o index e passando pelo express

import { authRouter } from "./Authentication/authRouter";
app.use(authRouter);

import { userRouter } from "./User/userRoute";
app.use(userRouter);

import { rolesRouter } from "./Roles/rolesRoute";
app.use(rolesRouter);

import { deptRouter } from "./Departments/departamentRoute";
app.use(deptRouter);

import { deptEmpRouter } from "./dept-employee/deptempRoute";
app.use(deptEmpRouter);

import { employeesRouter } from "./Employees/employeesRoute";
app.use(employeesRouter);

import { permissionRouter } from "./Permissions/permissionRoute";
app.use(permissionRouter);

import { rolePermRouter } from "./roles-permission/rolePermRoute";
app.use(rolePermRouter);

import { salRouter } from "./Salary/salaryRoute";
app.use(salRouter);

// Configurando o servidor
const port = process.env.API_PORT;
app.listen(port, () => {
	console.log(`API Funcionando na porta ${port}`);
});

// Rota de teste da API
app.get("/teste", (req: Request, res: Response) => {
	res.json({ message: "API funcionando!!!" });
});
