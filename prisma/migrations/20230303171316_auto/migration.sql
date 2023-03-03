/*
  Warnings:

  - A unique constraint covering the columns `[deptName]` on the table `departments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "departments_deptName_key" ON "departments"("deptName");
