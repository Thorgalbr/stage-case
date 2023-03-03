/*
    * Configuração Departments/Employees CRUD routes
*/

// Importando o express e configurando o router 
import express, {Request, Response} from 'express';
const deptEmpRouter = express.Router();

// Importando o prisma client e configurando
import { PrismaClient } from '../../prisma/prismaClient'
const prisma = new PrismaClient();

// Importando o moment para manipular as datas do código
import moment from 'moment';

interface IDeptEmp {
    dept_guid: string,
    emp_guid: string,
    from_date: string,
    to_date: string,
};

deptEmpRouter.post('/dept-employee/add', async (req: Request, res: Response) => {

    const { dept_guid, emp_guid, from_date, to_date }: IDeptEmp = req.body;

    moment(from_date, to_date, "DD-MM-YYYY").format();

    const deptEmpReg = await prisma.dept_emp.create({
        data: {
            dept_guid:  dept_guid,
            emp_guid: emp_guid,
            from_date: from_date,
            to_date: to_date
        },

    });

    res.json(deptEmpReg);

});

deptEmpRouter.get('/dept-employee/request', async (req: Request, res: Response) => {

    const deptEmpReq = await prisma.dept_emp.findMany();

    res.json(deptEmpReq);

});

deptEmpRouter.get('/dept-employee/request/guid_dept_emp', async (req: Request, res: Response) => {

    const guid_dept_emp = req.params.guid_dept_emp;

    const deptEmpReqId = await prisma.dept_emp.findUnique({
        where: {
            guid_dept_emp: guid_dept_emp
        },
    });

    res.json(deptEmpReqId);

});

deptEmpRouter.patch('/dept-employee/update/guid_dept_emp', async (req: Request, res: Response) => {

    const guid_dept_emp = req.params.guid_dept_emp;

    const { dept_guid, emp_guid, from_date, to_date }: IDeptEmp = req.body;

    moment(from_date, to_date, "DD-MM-YYYY").format();

    const deptEmpUpdt = await prisma.dept_emp.update({
        where: {
            guid_dept_emp: guid_dept_emp
        },
        data: {
            dept_guid:  dept_guid,
            emp_guid: emp_guid,
            from_date: from_date,
            to_date: to_date
        },
    });

    res.json(deptEmpUpdt);

});

deptEmpRouter.delete('/dept-employee/delete/guid_dept_emp', async (req: Request, res: Response) => {
    const guid_dept_emp = req.params.guid_dept_emp;

    const deptEmpDel = await prisma.dept_emp.delete({
        where: {
            guid_dept_emp: guid_dept_emp
        },
    });

    res.json(deptEmpDel);

});

export { deptEmpRouter };