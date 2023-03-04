/* 
    * Arquivo Prisma, para importar o PrismaClient e exportar na aplicação, para uma melhor organização
*/

import { PrismaClient } from '../../prisma/prismaClient'

export const prisma = new PrismaClient();