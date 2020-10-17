-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE PROCEDURE `scc`.`sp_GetLocationsUpcomingEvents` ()
BEGIN
    SELECT id, location_name 
    FROM location 
	WHERE loc_cd = 'ue';
END