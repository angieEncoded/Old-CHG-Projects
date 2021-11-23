CREATE TABLE `notice_mes` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`uuid` CHAR(36) NULL DEFAULT NULL COLLATE 'utf8mb4_bin',
	`reply` TEXT NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`archived` TINYINT(1) NOT NULL DEFAULT '0',
	`added_by` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`created_on` DATETIME NOT NULL DEFAULT current_timestamp(),
	`updated_on` DATETIME NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
AUTO_INCREMENT=33
;
