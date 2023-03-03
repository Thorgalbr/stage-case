/*
  Warnings:

  - A unique constraint covering the columns `[permTitle]` on the table `permission` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[roleTitle]` on the table `role` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "permission_permTitle_key" ON "permission"("permTitle");

-- CreateIndex
CREATE UNIQUE INDEX "role_roleTitle_key" ON "role"("roleTitle");
