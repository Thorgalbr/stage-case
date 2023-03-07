/*
  Warnings:

  - Added the required column `from_date` to the `dept_emp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to_date` to the `dept_emp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dept_emp" ADD COLUMN     "from_date" DATE NOT NULL,
ADD COLUMN     "to_date" DATE NOT NULL;
