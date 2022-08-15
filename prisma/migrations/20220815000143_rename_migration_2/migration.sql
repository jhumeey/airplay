/*
  Warnings:

  - You are about to drop the column `private` on the `Playlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Playlist"
RENAME COLUMN "private" TO "isPublic";
