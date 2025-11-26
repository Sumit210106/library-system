-- CreateTable
CREATE TABLE `Book` (
    `book_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `summary` VARCHAR(191) NOT NULL,
    `ISBN` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `author_id` INTEGER NOT NULL,
    `genre_id` INTEGER NOT NULL,

    PRIMARY KEY (`book_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `genre_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`genre_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Author` (
    `author_id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `family_name` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `date_of_death` DATETIME(3) NULL,
    `lifespan` VARCHAR(191) NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`author_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `Author`(`author_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_genre_id_fkey` FOREIGN KEY (`genre_id`) REFERENCES `Genre`(`genre_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
