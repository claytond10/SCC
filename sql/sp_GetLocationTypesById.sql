-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetLocationTypeById`(IN iId CHAR(2))
    COMMENT 'Procdure to obtain a single Location Type'
BEGIN
    SELECT loc_cd, loc_cd_full
    FROM location_type
    WHERE loc_cd = iId;
END