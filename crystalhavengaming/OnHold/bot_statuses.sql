CREATE TABLE `bot_statuses` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`uuid` CHAR(36) NULL DEFAULT NULL COLLATE 'utf8mb4_bin',
	`type` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`activity` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`added_by` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`updated_by` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	`archived` TINYINT(1) NOT NULL DEFAULT '0',
	`created_on` DATETIME NOT NULL DEFAULT current_timestamp(),
	`updated_on` DATETIME NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
AUTO_INCREMENT=77
;
