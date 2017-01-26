-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
		
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `FirstName` VARCHAR NOT NULL DEFAULT 'NULL',
  `LastName` VARCHAR NULL DEFAULT NULL,
  `LocationsId` INTEGER NOT NULL DEFAULT NULL,
  `UserPreferenceId` INTEGER NULL DEFAULT NULL,
  `BookingsId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Locations'
-- 
-- ---

DROP TABLE IF EXISTS `Locations`;
		
CREATE TABLE `Locations` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'UserPreferences'
-- 
-- ---

DROP TABLE IF EXISTS `UserPreferences`;
		
CREATE TABLE `UserPreferences` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Preference` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'UserBookings'
-- 
-- ---

DROP TABLE IF EXISTS `UserBookings`;
		
CREATE TABLE `UserBookings` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `EventId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Hosts'
-- 
-- ---

DROP TABLE IF EXISTS `Hosts`;
		
CREATE TABLE `Hosts` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `FirstName` INTEGER NULL DEFAULT NULL,
  `LastName` INTEGER NULL DEFAULT NULL,
  `LocationId` INTEGER NULL DEFAULT NULL,
  `ReviewId` INTEGER NULL DEFAULT NULL,
  `MenuId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Events '
-- 
-- ---

DROP TABLE IF EXISTS `Events `;
		
CREATE TABLE `Events ` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `TimeStamp` VARCHAR NULL DEFAULT NULL,
  `Cuisine` VARCHAR NULL DEFAULT NULL,
  `Host_Id` INTEGER NULL DEFAULT NULL,
  `MaxSeats` INTEGER NULL DEFAULT NULL,
  `MenuId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Users_Hosts'
-- 
-- ---

DROP TABLE IF EXISTS `Users_Hosts`;
		
CREATE TABLE `Users_Hosts` (
  `UserId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Host_Id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`UserId`)
);

-- ---
-- Table 'HostReviews'
-- 
-- ---

DROP TABLE IF EXISTS `HostReviews`;
		
CREATE TABLE `HostReviews` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Review` VARCHAR NULL DEFAULT NULL,
  `Rating` INTEGER NULL DEFAULT NULL,
  `UserId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Host_Specialties'
-- 
-- ---

DROP TABLE IF EXISTS `Host_Specialties`;
		
CREATE TABLE `Host_Specialties` (
  `HostId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `SpecialtyId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`HostId`)
);

-- ---
-- Table 'Specialties'
-- 
-- ---

DROP TABLE IF EXISTS `Specialties`;
		
CREATE TABLE `Specialties` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Specialty` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Menus'
-- 
-- ---

DROP TABLE IF EXISTS `Menus`;
		
CREATE TABLE `Menus` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Dinner Item` VARCHAR NULL DEFAULT NULL,
  `Lunch Item` VARCHAR NULL DEFAULT NULL,
  `Breakfast Item` VARCHAR NULL DEFAULT NULL,
  `Drink Item` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Users` ADD FOREIGN KEY (id) REFERENCES `Users_Hosts` (`UserId`);
ALTER TABLE `Users` ADD FOREIGN KEY (LocationsId) REFERENCES `Locations` (`id`);
ALTER TABLE `Users` ADD FOREIGN KEY (UserPreferenceId) REFERENCES `UserPreferences` (`id`);
ALTER TABLE `Users` ADD FOREIGN KEY (BookingsId) REFERENCES `UserBookings` (`id`);
ALTER TABLE `UserBookings` ADD FOREIGN KEY (EventId) REFERENCES `Events ` (`id`);
ALTER TABLE `Hosts` ADD FOREIGN KEY (id) REFERENCES `Host_Specialties` (`HostId`);
ALTER TABLE `Hosts` ADD FOREIGN KEY (LocationId) REFERENCES `Locations` (`id`);
ALTER TABLE `Hosts` ADD FOREIGN KEY (ReviewId) REFERENCES `HostReviews` (`id`);
ALTER TABLE `Hosts` ADD FOREIGN KEY (MenuId) REFERENCES `Menus` (`id`);
ALTER TABLE `Events ` ADD FOREIGN KEY (Host_Id) REFERENCES `Hosts` (`id`);
ALTER TABLE `Events ` ADD FOREIGN KEY (MenuId) REFERENCES `Menus` (`id`);
ALTER TABLE `Users_Hosts` ADD FOREIGN KEY (Host_Id) REFERENCES `Hosts` (`id`);
ALTER TABLE `HostReviews` ADD FOREIGN KEY (UserId) REFERENCES `Users` (`id`);
ALTER TABLE `Host_Specialties` ADD FOREIGN KEY (SpecialtyId) REFERENCES `Specialties` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Locations` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `UserPreferences` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `UserBookings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Hosts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Events ` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users_Hosts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `HostReviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Host_Specialties` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Specialties` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Menus` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`FirstName`,`LastName`,`LocationsId`,`UserPreferenceId`,`BookingsId`) VALUES
-- ('','','','','','');
-- INSERT INTO `Locations` (`id`) VALUES
-- ('');
-- INSERT INTO `UserPreferences` (`id`,`Preference`) VALUES
-- ('','');
-- INSERT INTO `UserBookings` (`id`,`EventId`) VALUES
-- ('','');
-- INSERT INTO `Hosts` (`id`,`FirstName`,`LastName`,`LocationId`,`ReviewId`,`MenuId`) VALUES
-- ('','','','','','');
-- INSERT INTO `Events ` (`id`,`TimeStamp`,`Cuisine`,`Host_Id`,`MaxSeats`,`MenuId`) VALUES
-- ('','','','','','');
-- INSERT INTO `Users_Hosts` (`UserId`,`Host_Id`) VALUES
-- ('','');
-- INSERT INTO `HostReviews` (`id`,`Review`,`Rating`,`UserId`) VALUES
-- ('','','','');
-- INSERT INTO `Host_Specialties` (`HostId`,`SpecialtyId`) VALUES
-- ('','');
-- INSERT INTO `Specialties` (`id`,`Specialty`) VALUES
-- ('','');
-- INSERT INTO `Menus` (`id`,`Dinner Item`,`Lunch Item`,`Breakfast Item`,`Drink Item`) VALUES
-- ('','','','','');