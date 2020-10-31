INSERT INTO `scc`.`location_type` (`loc_cd`, `loc_cd_full`) VALUES ('ue', 'Upcoming Events');
INSERT INTO `scc`.`location_type` (`loc_cd`, `loc_cd_full`) VALUES ('lg', 'Logistics');

INSERT INTO `scc`.`location` (`location_name`, `loc_cd`) VALUES ('Uptown', 'lg');
INSERT INTO `scc`.`location` (`location_name`, `loc_cd`) VALUES ('Church Office', 'ue');

INSERT INTO `scc`.`image` (`image_html`, `image_name`) VALUES ('<i class=\"fas fa-arrow-circle-up\"></i>', 'Up Arrow');
INSERT INTO `scc`.`image` (`image_html`, `image_name`) VALUES ('<i class=\"fas fa-arrow-circle-left\"></i>', 'Left Arrow');
INSERT INTO `scc`.`image` (`image_html`, `image_name`) VALUES ('<i class=\"fas fa-arrow-circle-right\"></i>', 'Right Arrow');
