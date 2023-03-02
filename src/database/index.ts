/*
    * Configurando o prisma client para gerenciar o DB no Postgres
*/

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

module.exports = prisma;

