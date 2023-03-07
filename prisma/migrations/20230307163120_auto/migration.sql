/*
  Warnings:

  - You are about to drop the column `from_date` on the `dept_emp` table. All the data in the column will be lost.
  - You are about to drop the column `to_date` on the `dept_emp` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `role_permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tokens` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_guid` to the `departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projects_guid` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'RH', 'DEPTMANAGER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE');

-- DropForeignKey
ALTER TABLE "role" DROP CONSTRAINT "role_user_guid_fkey";

-- DropForeignKey
ALTER TABLE "role_permission" DROP CONSTRAINT "role_permission_permission_guid_fkey";

-- DropForeignKey
ALTER TABLE "role_permission" DROP CONSTRAINT "role_permission_role_guid_fkey";

-- DropForeignKey
ALTER TABLE "tokens" DROP CONSTRAINT "tokens_users_guid_fkey";

-- AlterTable
ALTER TABLE "departments" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'INACTIVE',
ADD COLUMN     "user_guid" TEXT NOT NULL,
ALTER COLUMN "deptName" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "dept_emp" DROP COLUMN "from_date",
DROP COLUMN "to_date";

-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "projects_guid" TEXT NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'INACTIVE',
ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "user" DROP COLUMN "password",
ADD COLUMN     "password_hash" VARCHAR(255) NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'INACTIVE',
ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255);

-- DropTable
DROP TABLE "permission";

-- DropTable
DROP TABLE "role";

-- DropTable
DROP TABLE "role_permission";

-- DropTable
DROP TABLE "tokens";

-- CreateTable
CREATE TABLE "projects" (
    "guid_projects" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_guid" TEXT NOT NULL,
    "dept_guid" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("guid_projects")
);

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_user_guid_fkey" FOREIGN KEY ("user_guid") REFERENCES "user"("guid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_projects_guid_fkey" FOREIGN KEY ("projects_guid") REFERENCES "projects"("guid_projects") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_guid_fkey" FOREIGN KEY ("user_guid") REFERENCES "user"("guid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_dept_guid_fkey" FOREIGN KEY ("dept_guid") REFERENCES "departments"("guid_dept") ON DELETE RESTRICT ON UPDATE CASCADE;
