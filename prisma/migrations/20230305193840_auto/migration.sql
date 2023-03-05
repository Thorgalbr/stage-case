/*
  Warnings:

  - You are about to drop the column `role_guid` on the `user` table. All the data in the column will be lost.
  - Added the required column `user_guid` to the `role` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_role_guid_fkey";

-- AlterTable
ALTER TABLE "role" ADD COLUMN     "user_guid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "role_guid";

-- AddForeignKey
ALTER TABLE "role" ADD CONSTRAINT "role_user_guid_fkey" FOREIGN KEY ("user_guid") REFERENCES "user"("guid_user") ON DELETE RESTRICT ON UPDATE CASCADE;
