/*
    * Configuração Employees CRUD routes
*/

// Importando o express e configurando o router 
import express, {Request, Response} from 'express';
const employeesRouter = express.Router();

// Importando o prisma client e configurando
import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

import moment from 'moment';

interface IEmployees {
    firstName: string,
    lastName: string,
    birthDate: string,
    hire_date: string,
    user_guid: string,
    salary_guid: string
};

employeesRouter.post('/employees/add', async (req: Request, res: Response) => {

    const { firstName, lastName, birthDate, hire_date, user_guid, salary_guid }: IEmployees = req.body;

    moment(birthDate, hire_date, "DD-MM-YYYY").format();

    const emploReg = await prisma.employees.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDate,
            hire_date: hire_date,
            user_guid: user_guid,
            salary_guid: salary_guid
        }
    });

    res.json(emploReg);

});

employeesRouter.get('/employees/request', async (req: Request, res: Response) => {

    const emploReq = await prisma.employees.findMany();

    res.json(emploReq);

});

employeesRouter.get('/employees/request/guid_employee', async (req: Request, res: Response) => {

    const guid_employee = req.params.guid_employee;

    const emploReqId = await prisma.employees.findUnique({
        where: {
            guid_employee: guid_employee
        },
    });

    res.json(emploReqId);

});

employeesRouter.patch('/employees/update/guid_employee', async (req: Request, res: Response) => {

    const guid_employee = req.params.guid_employee;

    const { firstName, lastName, birthDate, hire_date, user_guid, salary_guid }: IEmployees = req.body;

    moment(birthDate, hire_date, "DD-MM-YYYY").format();

    const emploUpdt = await prisma.employees.update({
        where: {
            guid_employee: guid_employee
        },
        data: {
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDate,
            hire_date: hire_date,
            user_guid: user_guid,
            salary_guid: salary_guid
        }
    })
});

employeesRouter.patch('/employees/delete/guid_employee', async (req: Request, res: Response) => {

    const guid_employee = req.params.guid_employee;

    const emploDel = await prisma.employees.delete({
        where: {
            guid_employee: guid_employee
        },
    });

    res.json(emploDel);

});

export { employeesRouter };