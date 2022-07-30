/*
  Warnings:

  - Made the column `name` on table `Ticket` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Ticket` required. This step will fail if there are existing NULL values in that column.
  - Made the column `priority` on table `Ticket` required. This step will fail if there are existing NULL values in that column.
  - Made the column `projectId` on table `Ticket` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_projectId_fkey";

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "priority" SET NOT NULL,
ALTER COLUMN "projectId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
