/*
  Warnings:

  - You are about to drop the column `salary_guid` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the `salary` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `wage` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_salary_guid_fkey";

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "salary_guid",
ADD COLUMN     "wage" DECIMAL(65,30) NOT NULL;

-- DropTable
DROP TABLE "salary";
