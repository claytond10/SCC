CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetLocations`()
    COMMENT 'Procdure to obtain list of Locations'
BEGIN
    SELECT l.id id, l.location_name location_name, l.loc_cd loc_cd, lt.loc_cd_full
    FROM location l 
	JOIN location_type lt ON (l.loc_cd = lt.loc_cd);
END