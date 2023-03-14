/*
  Warnings:

  - You are about to drop the column `user_guid` on the `departments` table. All the data in the column will be lost.
  - You are about to drop the column `user_guid` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `user_guid` on the `projects` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "departments" DROP CONSTRAINT "departments_user_guid_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_user_guid_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_user_guid_fkey";

-- AlterTable
ALTER TABLE "departments" DROP COLUMN "user_guid";

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "user_guid";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "user_guid";
