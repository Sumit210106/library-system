/*
  Warnings:

  - The primary key for the `Author` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `author_id` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `lifespan` on the `Author` table. All the data in the column will be lost.
  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ISBN` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `author_id` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `book_id` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `genre_id` on the `Book` table. All the data in the column will be lost.
  - The primary key for the `Genre` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `genre_id` on the `Genre` table. All the data in the column will be lost.
  - Added the required column `id` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Genre` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_author_id_fkey`;

-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_genre_id_fkey`;

-- AlterTable
ALTER TABLE `Author` DROP PRIMARY KEY,
    DROP COLUMN `author_id`,
    DROP COLUMN `lifespan`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `lifeSpan` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Book` DROP PRIMARY KEY,
    DROP COLUMN `ISBN`,
    DROP COLUMN `author_id`,
    DROP COLUMN `book_id`,
    DROP COLUMN `genre_id`,
    ADD COLUMN `authorId` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `isbn` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Genre` DROP PRIMARY KEY,
    DROP COLUMN `genre_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `BookGenreMapping` (
    `bookId` INTEGER NOT NULL,
    `genreId` INTEGER NOT NULL,

    PRIMARY KEY (`bookId`, `genreId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookGenreMapping` ADD CONSTRAINT `BookGenreMapping_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookGenreMapping` ADD CONSTRAINT `BookGenreMapping_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
