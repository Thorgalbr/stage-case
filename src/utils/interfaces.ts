/*
 * Arquivo armazenando as interfaces definidas do projeto somente para organização
 *						Autor: Thiago Pereira
 */

import { Decimal } from "@prisma/client/runtime";

// Exportando a interface IUser para uso no arquivo userController.ts

export interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

// Exportando a interface IEmployees para uso no arquivo employeesController.ts

export interface IEmployees {
	firstName: string;
	lastName: string;
	birthDate: string;
	hire_date: string;
	wage: Decimal;
}

// Exportando a interface IDeptEmp para uso no arquivo deptemployeesController.ts

export interface IDeptEmp {
	from_date: string;
	to_date: string;
}

// Exportando a interface IRoles para uso no arquivo rolesController.ts

export interface IRoles {
	roleTitle: string;
}

// Exportando a interface JwtPayload para uso no arquivo auth.ts, foi necessário para a correção de um erro relativo aos payloads do jwt
export interface JwtPayload {
	userId: string;
}
