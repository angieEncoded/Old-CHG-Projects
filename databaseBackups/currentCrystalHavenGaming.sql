-- --------------------------------------------------------
-- Host:                         10.10.51.155
-- Server version:               10.5.9-MariaDB - MariaDB Server
-- Server OS:                    Linux
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for crystal_haven_development
CREATE DATABASE IF NOT EXISTS `crystal_haven_development` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `crystal_haven_development`;

-- Dumping structure for table crystal_haven_development.bot_statuses
CREATE TABLE IF NOT EXISTS `bot_statuses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `addedBy` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedBy` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `archived` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table crystal_haven_development.bot_statuses: ~74 rows (approximately)
/*!40000 ALTER TABLE `bot_statuses` DISABLE KEYS */;
INSERT INTO `bot_statuses` (`id`, `uuid`, `type`, `activity`, `addedBy`, `updatedBy`, `archived`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
	(1, NULL, 'PLAYING', 'The Outer Worlds', 'josie', NULL, 0, '2021-03-08 17:01:47', '2021-03-08 17:02:21', NULL),
	(2, NULL, 'PLAYING', 'Final Fantasy XIV', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(3, NULL, 'PLAYING', 'Fallout 4', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(4, NULL, 'PLAYING', 'Dragon Age: Inquisition', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(5, NULL, 'PLAYING', 'Mass Effect 3', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(6, NULL, 'PLAYING', 'Saints Row IV', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(7, NULL, 'PLAYING', 'Minecraft', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(8, NULL, 'PLAYING', 'Fortnite', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(9, NULL, 'PLAYING', 'Roblox', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(10, NULL, 'PLAYING', 'Red Dead Redemption II', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(11, NULL, 'PLAYING', 'Overwatch', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(12, NULL, 'PLAYING', 'Spider-man', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(13, NULL, 'PLAYING', 'Call of Duty: Black Ops IV', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(14, NULL, 'PLAYING', 'League of Legends', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(15, NULL, 'PLAYING', 'Super Mario Odyssey', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(16, NULL, 'PLAYING', 'The Elder Scrolls V: Skyrim', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(17, NULL, 'PLAYING', 'Terraria', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(18, NULL, 'PLAYING', 'Assassin\'s Creed: Origins', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(19, NULL, 'PLAYING', 'Pac-Man', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(20, NULL, 'PLAYING', 'Mortal Kombat 11', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(21, NULL, 'PLAYING', 'Tetris', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(22, NULL, 'PLAYING', 'Dark Souls III', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(23, NULL, 'PLAYING', 'Monster Hunter World', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(24, NULL, 'WATCHING', 'Person of Interest', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(25, NULL, 'WATCHING', 'The Walking Dead', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(26, NULL, 'WATCHING', 'American Horror Story', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(27, NULL, 'WATCHING', 'Game of Thrones', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(28, NULL, 'WATCHING', 'Supernatural', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(29, NULL, 'WATCHING', 'Grey\'s Anatomy', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(30, NULL, 'WATCHING', 'Breaking Bad', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(31, NULL, 'WATCHING', 'Arrow', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(32, NULL, 'WATCHING', 'Angel', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(33, NULL, 'WATCHING', 'Buffy the Vampire Slayer', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(34, NULL, 'WATCHING', 'Stranger Things', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(35, NULL, 'WATCHING', 'The Blacklist', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(36, NULL, 'WATCHING', 'Lucifer', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(37, NULL, 'WATCHING', 'Law & Order: SVU', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(38, NULL, 'WATCHING', 'Criminal Minds', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(39, NULL, 'WATCHING', 'NCIS', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(40, NULL, 'WATCHING', 'Modern Family', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(41, NULL, 'WATCHING', 'The 100', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(42, NULL, 'WATCHING', 'Another Life', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(43, NULL, 'WATCHING', 'Steven Universe', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(44, NULL, 'WATCHING', 'Lost Girl', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(45, NULL, 'WATCHING', 'all of you right now.', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(46, NULL, 'WATCHING', 'Wentworth', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(47, NULL, 'STREAMING', 'Final Fantasy XI', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(48, NULL, 'STREAMING', 'Diablo III', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(49, NULL, 'STREAMING', 'The Legend of Zelda', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(50, NULL, 'STREAMING', 'Metroid', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(51, NULL, 'LISTENING', 'Ghost', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(52, NULL, 'LISTENING', 'The Cranberries', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(53, NULL, 'LISTENING', 'Concrete Blonde', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(54, NULL, 'LISTENING', 'My Dying Bride', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(55, NULL, 'LISTENING', 'Stratovarius', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(56, NULL, 'LISTENING', 'Woods of Ypres', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(57, NULL, 'LISTENING', 'Hammerfall', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(58, NULL, 'LISTENING', 'Rob Zombie', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(59, NULL, 'LISTENING', 'Tori Amos', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(60, NULL, 'LISTENING', 'Roxette', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(61, NULL, 'LISTENING', 'Dream Theater', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(62, NULL, 'LISTENING', 'Swallow the Sun', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(63, NULL, 'LISTENING', 'Elle King', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(64, NULL, 'LISTENING', 'Evanescence', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(65, NULL, 'LISTENING', 'Type O Negative', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(66, NULL, 'LISTENING', 'Josie bitch.', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(67, NULL, 'WATCHING', 'you on the toilet.', 'josie', NULL, 0, '2021-03-08 17:02:40', '2021-03-08 17:02:40', NULL),
	(75, '8c2d7ca7-d95f-40c1-a1ea-e49a56b7b90c', 'LISTENING', 'Baby Metal', 'Josie', 'Josie', 0, '2021-04-18 08:06:59', '2021-04-18 08:07:12', '2021-04-18 08:07:14'),
	(76, 'e3ef2d6a-d32b-4d35-b9bd-b5c67c8f6620', 'LISTENING', 'Baby Metal', 'Josie', NULL, 0, '2021-04-18 08:07:21', '2021-04-18 08:07:21', NULL);
/*!40000 ALTER TABLE `bot_statuses` ENABLE KEYS */;

-- Dumping structure for table crystal_haven_development.duties
CREATE TABLE IF NOT EXISTS `duties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `contentDifficulty` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numberOfPlayers` int(11) NOT NULL,
  `defaultRoles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`defaultRoles`)),
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `xpac` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `addedBy` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedBy` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `archived` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table crystal_haven_development.duties: ~0 rows (approximately)
/*!40000 ALTER TABLE `duties` DISABLE KEYS */;
INSERT INTO `duties` (`id`, `uuid`, `name`, `description`, `contentDifficulty`, `numberOfPlayers`, `defaultRoles`, `image`, `xpac`, `addedBy`, `updatedBy`, `archived`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
	(33, 'c2958d65-3c1d-4d31-89ff-7e052c2dbb1c', 'The Twinning', 'This is a four person dungeon in ffxiv', 'normal', 4, '{"tank":"1","heal":"1","dps":"2","limited":"0"}', '46820b7902b45b3cf2d0fd751ea032b9', 'shb', 'Josie', NULL, 0, '2021-04-18 07:28:52', '2021-04-18 07:28:52', NULL),
	(34, '235770f1-b05c-4f35-8924-97cfe3a7f88c', 'Promise of Eden', 'A literal giant rainbow crystal and everyone is still arguing that they aren\'t involved because we think Japan (the fucking ORIGIN of yuri manga) doesn\'t know about sapphists. ', 'normal', 8, '{"tank":"2","heal":"2","dps":"4","limited":"0"}', '01a02c45943eadcb80143f8589ed56fd', 'shb', 'Josie', 'Josie', 0, '2021-04-18 08:10:28', '2021-04-18 08:11:33', NULL),
	(35, 'b14ca1c5-2f6d-4cb5-a925-0b243a11e553', 'Blue Mages!', 'What do they actually do?', 'unreal', 8, '{"tank":"0","heal":"0","dps":"0","limited":"8"}', 'bfc8015cdf4eed4caa30b30fd4a3959f', 'ew', 'Josie', NULL, 0, '2021-04-18 08:12:56', '2021-04-18 08:12:56', NULL);
/*!40000 ALTER TABLE `duties` ENABLE KEYS */;

-- Dumping structure for table crystal_haven_development.events
CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `leader` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scheduler` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `time` time NOT NULL,
  `morningOrNight` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `requestedJobs` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`requestedJobs`)),
  `signedUp` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`signedUp`)),
  `archived` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `dutyId` int(11) DEFAULT NULL,
  `quicknotes` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dutyId` (`dutyId`),
  CONSTRAINT `events_ibfk_1` FOREIGN KEY (`dutyId`) REFERENCES `duties` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table crystal_haven_development.events: ~0 rows (approximately)
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` (`id`, `uuid`, `leader`, `scheduler`, `name`, `date`, `time`, `morningOrNight`, `description`, `requestedJobs`, `signedUp`, `archived`, `createdAt`, `updatedAt`, `deletedAt`, `dutyId`, `quicknotes`) VALUES
	(25, 'd760133c-c5aa-47b4-ba62-f1acb3279f85', 'Last Hero', 'Josie', 'Twinning shenanigans', '2021-04-23 00:00:00', '05:00:00', 'am', '<h1>Join me for some twinning shenanigans!</h1><div><br /></div><div>Rules:</div><div><ol><li>No salt</li><li>Don\'t be a dick</li><li>Try to have fun</li></ol><b>This is gonna be grand!</b></div>', '{"tank":"1","heal":"1","dps":"2","limited":"0"}', NULL, 0, '2021-04-18 07:38:00', '2021-04-18 07:52:46', NULL, 33, NULL),
	(26, 'bbebd38d-0757-41ed-8ece-4632e7a381d2', 'Last Hero', 'Josie', 'We will be victorious!', '2021-04-23 00:00:00', '08:00:00', 'pm', '<div>lalalal</div>', '{"pld":"2","war":"0","gnb":"0","drk":"0","whm":"2","sch":"0","ast":"0","mnk":"4","drg":"0","nin":"0","sam":"0","brd":"0","mch":"0","dnc":"0","blm":"0","smn":"0","rdm":"0","blu":"0"}', NULL, 0, '2021-04-18 07:55:48', '2021-04-18 07:55:48', NULL, 33, NULL),
	(27, '757bef42-5961-48ae-b69a-98a1b2fffb55', 'Last Hero', 'Josie', 'This is a test run', '2021-04-30 00:00:00', '10:00:00', 'pm', '<div>I don\'t know what Blue Mages actually do but I know they gather in a group. </div>', '{"tank":"0","heal":"0","dps":"0","limited":"8"}', NULL, 0, '2021-04-18 08:13:54', '2021-04-18 08:13:54', NULL, 35, NULL);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;

-- Dumping structure for table crystal_haven_development.notice_mes
CREATE TABLE IF NOT EXISTS `notice_mes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `reply` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `addedBy` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `archived` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table crystal_haven_development.notice_mes: ~27 rows (approximately)
/*!40000 ALTER TABLE `notice_mes` DISABLE KEYS */;
INSERT INTO `notice_mes` (`id`, `uuid`, `reply`, `addedBy`, `archived`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
	(1, NULL, 'Oh, you sweet summer child...', 'josie', 0, '2021-03-08 11:44:54', '2021-03-08 11:52:52', NULL),
	(2, NULL, 'Bless your heart.', 'josie', 0, '2021-03-08 11:51:08', '2021-03-08 11:52:54', NULL),
	(3, NULL, 'What is that smell? Have you been cleaning fish?', 'josie', 0, '2021-03-08 11:51:46', '2021-03-08 11:52:57', NULL),
	(4, NULL, 'Hello Warrior of....what was it again?', 'josie', 0, '2021-03-08 11:51:59', '2021-03-08 11:52:59', NULL),
	(5, NULL, 'And you are...?', 'josie', 0, '2021-03-08 11:52:22', '2021-03-08 11:53:02', NULL),
	(6, NULL, 'Run along, now.', 'josie', 0, '2021-03-08 11:52:45', '2021-03-08 11:55:27', NULL),
	(7, NULL, 'Outstanding performance. Is my bath ready?', 'josie', 0, '2021-03-08 11:53:26', '2021-03-08 11:55:42', NULL),
	(8, NULL, 'Bhahahahahahahaha', 'josie', 0, '2021-03-08 11:53:42', '2021-03-08 11:53:42', NULL),
	(9, NULL, 'Outstanding performance, as to be expected from my pupil.', 'josie', 0, '2021-03-08 11:53:53', '2021-03-08 11:53:53', NULL),
	(10, NULL, 'You have failed me for the last time.', 'josie', 0, '2021-03-08 11:54:06', '2021-03-08 11:55:51', NULL),
	(11, NULL, 'Wait, what? And who are you again?', 'josie', 0, '2021-03-08 11:54:21', '2021-03-08 11:54:21', NULL),
	(12, NULL, 'Today\'s lesson, fetch me over 9000 comms!', 'josie', 0, '2021-03-08 11:54:38', '2021-03-08 11:54:38', NULL),
	(13, NULL, 'Welp, you zigged when you should have zagged.', 'josie', 0, '2021-03-08 11:54:51', '2021-03-08 11:55:59', NULL),
	(14, NULL, 'This borders on stalking...', 'josie', 0, '2021-03-08 11:55:04', '2021-03-08 11:55:05', NULL),
	(15, NULL, 'Will this take very long?', 'josie', 0, '2021-03-08 11:56:15', '2021-03-08 11:56:16', NULL),
	(16, NULL, 'I\'ve really got a lot to do today.', 'josie', 0, '2021-03-08 11:56:45', '2021-03-08 11:56:45', NULL),
	(17, NULL, 'How did you get in here? Guards!', 'josie', 0, '2021-03-08 11:56:56', '2021-03-08 11:56:56', NULL),
	(18, NULL, 'This again?', 'josie', 0, '2021-03-08 11:57:11', '2021-03-08 11:57:12', NULL),
	(19, NULL, 'For the nth time, no I will not go out with you!', 'josie', 0, '2021-03-08 11:57:24', '2021-03-08 11:57:24', NULL),
	(20, NULL, 'Do I look like the kind of woman who has time to chit-chat with the rabble?', 'josie', 0, '2021-03-08 11:57:38', '2021-03-08 11:57:38', NULL),
	(21, NULL, 'I ought to have you arrested.', 'josie', 0, '2021-03-08 11:57:54', '2021-03-08 11:57:54', NULL),
	(22, NULL, 'We\'ve been through this. My answer hasn\'t changed.', 'josie', 0, '2021-03-08 11:58:14', '2021-03-08 11:58:15', NULL),
	(23, NULL, 'If only you were taller...', 'josie', 0, '2021-03-08 11:58:32', '2021-03-08 11:58:32', NULL),
	(24, NULL, 'I am going to kill her for giving you a way to bother me.', 'josie', 0, '2021-03-08 11:58:56', '2021-03-08 11:58:57', NULL),
	(32, '3d5bc36c-cc68-4ca4-beec-69fd54e0a353', 'sdfsdfdsa', 'Josie', 0, '2021-04-18 08:07:56', '2021-04-18 08:08:03', '2021-04-18 08:08:04');
/*!40000 ALTER TABLE `notice_mes` ENABLE KEYS */;

-- Dumping structure for table crystal_haven_development.Session
CREATE TABLE IF NOT EXISTS `Session` (
  `sid` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table crystal_haven_development.Session: ~1 rows (approximately)
/*!40000 ALTER TABLE `Session` DISABLE KEYS */;
INSERT INTO `Session` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
	('Jzs7WZurTRSihE-C9MYQSFDXroCYzfnK', '2021-04-18 17:37:10', '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"csrfSecret":"apisA97zB8AXVRtEEvuc0NXV","flash":{},"currentPage":"http://localhost:8080/duties/new"}', '2021-04-17 17:36:59', '2021-04-17 17:37:10'),
	('VhjxQTi4OtT8Ovisfb8fOqqtYkPbi8y7', '2021-04-19 08:14:51', '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"csrfSecret":"lFAsvivekgEbURZ_bd1MRazC","flash":{},"currentPage":"http://localhost:8080/events/25"}', '2021-04-18 07:24:31', '2021-04-18 08:14:51');
/*!40000 ALTER TABLE `Session` ENABLE KEYS */;

-- Dumping structure for table crystal_haven_development.xiv_jobs
CREATE TABLE IF NOT EXISTS `xiv_jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abbrv` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emoji` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `addedBy` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `archived` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `guides` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `battleImage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table crystal_haven_development.xiv_jobs: ~19 rows (approximately)
/*!40000 ALTER TABLE `xiv_jobs` DISABLE KEYS */;
INSERT INTO `xiv_jobs` (`id`, `uuid`, `name`, `type`, `abbrv`, `role`, `emoji`, `addedBy`, `archived`, `createdAt`, `updatedAt`, `deletedAt`, `description`, `guides`, `icon`, `battleImage`) VALUES
	(1, NULL, 'Paladin', 'tank', 'pld', 'tank', ':PaladinFF:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'pld.png', NULL),
	(2, NULL, 'Warrior', 'tank', 'war', 'tank', ':WarriorFF:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'war.png', NULL),
	(3, NULL, 'Gunbreaker', 'tank', 'gnb', 'tank', ':Gunbreaker:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'gnb.png', NULL),
	(4, NULL, 'Dark Knight', 'tank', 'drk', 'tank', ':DarkKnight:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'drk.png', NULL),
	(5, NULL, 'White Mage', 'healer', 'whm', 'heal', ':Whitemage:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'whm.png', NULL),
	(6, NULL, 'Scholar', 'healer', 'sch', 'heal', ':Scholar:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'sch.png', NULL),
	(7, NULL, 'Astrologian', 'healer', 'ast', 'heal', ':Astrologian:', 'Josie', 0, '2021-04-06 17:05:55', '2021-04-06 17:05:55', NULL, '<div>sfsafsd</div>', NULL, 'ast.png', NULL),
	(8, NULL, 'Monk', 'melee', 'mnk', 'dps', ':MonkFF:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, 'the most awesome', NULL, 'mnk.png', NULL),
	(9, NULL, 'Dragoon', 'melee', 'drg', 'dps', ':Dragoon:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'drg.png', NULL),
	(10, NULL, 'Ninja', 'melee', 'nin', 'dps', ':Ninja:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'nin.png', NULL),
	(11, NULL, 'Samurai', 'melee', 'sam', 'dps', ':Samurai:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'sam.png', NULL),
	(12, NULL, 'Bard', 'prdps', 'brd', 'dps', ':Bard:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'brd.png', NULL),
	(13, NULL, 'Machinist', 'prdps', 'mch', 'dps', ':Machinist:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'mch.png', NULL),
	(14, NULL, 'Dancer', 'prdps', 'dnc', 'dps', ':Dancer:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'dnc.png', NULL),
	(15, NULL, 'Black Mage', 'mrdps', 'blm', 'dps', ':Blackmage:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'blm.png', NULL),
	(16, NULL, 'Summoner', 'mrdps', 'smn', 'dps', ':Summoner:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'smn.png', NULL),
	(17, NULL, 'Red Mage', 'mrdps', 'rdm', 'dps', ':Redmage:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-05 17:36:30', NULL, '<div>sfsafsd</div>', NULL, 'rdm.png', NULL),
	(18, NULL, 'Blue Mage', 'limited', 'blu', 'dps', ':BlueMage:', 'Josie', 0, '2021-04-05 17:36:30', '2021-04-17 16:28:38', NULL, '<div></div><div>why doesnt this work</div><div></div>', NULL, 'blu.png', NULL);
/*!40000 ALTER TABLE `xiv_jobs` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
