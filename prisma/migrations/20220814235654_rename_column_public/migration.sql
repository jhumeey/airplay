/*
  Warnings:

  - You are about to drop the column `isPublic` on the `Playlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "isPublic",
ADD COLUMN     "private" BOOLEAN NOT NULL DEFAULT false;
