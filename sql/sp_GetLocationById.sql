CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetLocationById`(IN iId INT)
BEGIN
    SELECT l.id id, l.location_name location_name, l.loc_cd loc_cd, lt.loc_cd_full loc_cd_full
    FROM location l 
	JOIN location_type lt ON (l.loc_cd = lt.loc_cd)
	WHERE l.id = iId;
END