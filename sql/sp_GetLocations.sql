-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetLocations`()
    COMMENT 'Procdure to obtain list of Locations'
BEGIN
    SELECT l.id id, l.location_name location_name, l.loc_cd loc_cd, lt.loc_cd_full loc_cd_full,
		l.image_id image_id, i.image_html
    FROM location l 
	JOIN location_type lt ON (l.loc_cd = lt.loc_cd)
	LEFT JOIN image i ON (l.image_id = i.id);
END