/*
  Warnings:

  - You are about to drop the column `createdBy` on the `employees` table. All the data in the column will be lost.
  - Changed the type of `wage` on the `employees` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "employees" DROP COLUMN "createdBy",
DROP COLUMN "wage",
ADD COLUMN     "wage" MONEY NOT NULL;
