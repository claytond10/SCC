CREATE TABLE `scc`.`activity` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `activity_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `activity_name_UNIQUE` (`activity_name` ASC));

CREATE TABLE `scc`.`announcement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `announcement` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `announcement_UNIQUE` (`announcement` ASC));
  
CREATE TABLE `scc`.`contact` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contact_name` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(12) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `contact_name_UNIQUE` (`contact_name` ASC));
  
CREATE TABLE `scc`.`event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `event_name` VARCHAR(50) NOT NULL,
  `loc_id` INT NULL,
  `contact_id` INT NULL,
  `e_date` VARCHAR(10) NULL,
  `e_time` VARCHAR(10) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));
  
CREATE TABLE `scc`.`image` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image_html` VARCHAR(50) NOT NULL,
  `image_name` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `image_name_UNIQUE` (`image_name` ASC));

CREATE TABLE `scc`.`location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `location_name` VARCHAR(50) NOT NULL,
  `loc_cd` CHAR(2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `location_name_UNIQUE` (`location_name` ASC));
  
CREATE TABLE `scc`.`location_type` (
  `loc_cd` CHAR(2) NOT NULL,
  `loc_cd_full` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`loc_cd`),
  UNIQUE INDEX `loc_cd_UNIQUE` (`loc_cd` ASC),
  UNIQUE INDEX `loc_cd_full_UNIQUE` (`loc_cd_full` ASC));  

CREATE TABLE `scc`.`logistics` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `log_name` VARCHAR(50) NOT NULL,
  `loc_id` INT NOT NULL,
  `image_id` INT,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `log_name_UNIQUE` (`log_name` ASC));

CREATE TABLE `scc`.`schedule` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `s_date` VARCHAR(10) NOT NULL,
  `s_time` VARCHAR(10) NOT NULL,
  `activity_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));
  