/*
  Warnings:

  - You are about to alter the column `name` on the `projects` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(75)`.
  - Added the required column `status` to the `departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "departments" ADD COLUMN     "status" VARCHAR(75) NOT NULL;

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "status" VARCHAR(75) NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(75);
