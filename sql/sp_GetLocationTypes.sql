-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetLocationTypes`()
    COMMENT 'Procdure to obtain list of Location Typess'
BEGIN
    SELECT loc_cd, loc_cd_full
    FROM location_type;
END