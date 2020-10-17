CREATE TABLE `scc`.`activity` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `activity_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `activity_name_UNIQUE` (`activity_name` ASC));

CREATE TABLE `scc`.`announcment` (
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
  
  
image (id, image_html, image_name)
location (id, location_name, loc_cd, image_id)
location_type (loc_cd, loc_cd_full)
logistics (id, log_name, loc_id)
schedule (id, s_date s_time, activity_id)
scripture