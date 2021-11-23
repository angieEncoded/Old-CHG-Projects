CREATE TABLE `duties` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`uuid` CHAR(36) NOT NULL COLLATE 'utf8mb4_bin',
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`description` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	`content_difficulty` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`number_of_players` INT(11) NOT NULL,
	`default_roles` LONGTEXT NOT NULL COLLATE 'utf8mb4_bin',
	`image` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`xpac` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`added_by` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`last_modified_by` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`archived` TINYINT(1) NOT NULL DEFAULT '0',
	`deleted` TINYINT(1) NOT NULL DEFAULT '0',
	`created_on` DATETIME NOT NULL DEFAULT current_timestamp(),
	`updated_on` DATETIME NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
AUTO_INCREMENT=39
;
