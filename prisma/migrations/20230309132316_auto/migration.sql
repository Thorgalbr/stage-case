/*
  Warnings:

  - You are about to drop the column `status` on the `departments` table. All the data in the column will be lost.
  - You are about to alter the column `deptName` on the `departments` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(75)`.
  - You are about to drop the column `status` on the `employees` table. All the data in the column will be lost.
  - You are about to alter the column `firstName` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(75)`.
  - You are about to alter the column `lastName` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(75)`.
  - You are about to drop the column `status` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `firstName` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(75)`.
  - You are about to alter the column `lastName` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(75)`.
  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(75)`.
  - You are about to alter the column `password` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(75)`.
  - Changed the type of `role` on the `user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "departments" DROP COLUMN "status",
ALTER COLUMN "deptName" SET DATA TYPE VARCHAR(75);

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "status",
ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(75),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(75);

-- AlterTable
ALTER TABLE "user" DROP COLUMN "status",
ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(75),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(75),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(75),
DROP COLUMN "role",
ADD COLUMN     "role" VARCHAR(75) NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(75);

-- DropEnum
DROP TYPE "Role";

-- DropEnum
DROP TYPE "Status";
