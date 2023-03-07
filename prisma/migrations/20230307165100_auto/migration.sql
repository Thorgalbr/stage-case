/*
  Warnings:

  - The values [ADMIN,USER,DEPTMANAGER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - The values [ACTIVE,INACTIVE] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('Admin', 'Manager', 'Developer', 'RH');
ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "user" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'Developer';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('Active', 'Archived');
ALTER TABLE "user" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "departments" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "employees" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "user" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TABLE "departments" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TABLE "employees" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "user" ALTER COLUMN "status" SET DEFAULT 'Archived';
ALTER TABLE "departments" ALTER COLUMN "status" SET DEFAULT 'Archived';
ALTER TABLE "employees" ALTER COLUMN "status" SET DEFAULT 'Archived';
COMMIT;

-- AlterTable
ALTER TABLE "departments" ALTER COLUMN "status" SET DEFAULT 'Archived';

-- AlterTable
ALTER TABLE "employees" ALTER COLUMN "status" SET DEFAULT 'Archived';

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'Developer',
ALTER COLUMN "status" SET DEFAULT 'Archived';
