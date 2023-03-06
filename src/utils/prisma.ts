/*
 * Arquivo Prisma, para importar o PrismaClient e exportar na aplicação, para uma melhor organização
 *                            Autor: Thiago Pereira
 */

// Importando e configurando o prisma client

import { PrismaClient } from "../../prisma/prismaClient";

// Exportando o prisma client

export const prisma = new PrismaClient();
