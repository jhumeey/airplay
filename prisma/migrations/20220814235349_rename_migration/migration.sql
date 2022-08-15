-- This is an empty migration.
ALTER TABLE "Playlist"
RENAME COLUMN "private" TO "isPublic";