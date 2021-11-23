CREATE TABLE `xiv_jobs` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`uuid` CHAR(36) NOT NULL COLLATE 'utf8mb4_bin',
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`type` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`abbrv` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`role` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`emoji` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`description` LONGTEXT NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	`guides` LONGTEXT NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	`icon` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	`image` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	`added_by` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`last_modified_by` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`archived` TINYINT(1) NULL DEFAULT '0',
	`deleted` TINYINT(1) NULL DEFAULT NULL,
	`created_on` DATETIME NOT NULL DEFAULT current_timestamp(),
	`updated_on` DATETIME NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
AUTO_INCREMENT=31
;
