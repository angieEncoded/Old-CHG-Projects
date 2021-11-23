CREATE TABLE `events` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`duty_id` INT(11) NOT NULL,
	`uuid` CHAR(36) NOT NULL COLLATE 'utf8mb4_bin',
	`leader` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`scheduler` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`date` DATETIME NOT NULL,
	`time` TIME NOT NULL,
	`morning_or_night` CHAR(2) NOT NULL DEFAULT '' COLLATE 'utf8mb4_unicode_ci',
	`description` LONGTEXT NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`quick_notes` LONGTEXT NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	`requested_jobs` LONGTEXT NOT NULL COLLATE 'utf8mb4_bin',
	`signed_up` LONGTEXT NOT NULL COLLATE 'utf8mb4_bin',
	`auto_accept` TINYINT(1) NOT NULL DEFAULT '0',
	`cancelled` TINYINT(1) NULL DEFAULT '0',
	`cancellation_reason` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	`added_by` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`last_modified_by` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`archived` TINYINT(1) NULL DEFAULT '0',
	`deleted` TINYINT(1) NULL DEFAULT '0',
	`created_on` DATETIME NULL DEFAULT current_timestamp(),
	`updated_on` DATETIME NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `dutyId` (`duty_id`) USING BTREE,
	CONSTRAINT `FK_events_duties` FOREIGN KEY (`duty_id`) REFERENCES `crystal_haven_testing`.`duties` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE,
	CONSTRAINT `requestedJobs` CHECK (json_valid(`requested_jobs`)),
	CONSTRAINT `signedUp` CHECK (json_valid(`signed_up`))
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
AUTO_INCREMENT=35
;
