/*
  Warnings:

  - You are about to drop the column `from_date` on the `dept_emp` table. All the data in the column will be lost.
  - You are about to drop the column `to_date` on the `dept_emp` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "dept_emp" DROP COLUMN "from_date",
DROP COLUMN "to_date";
