-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_UpdateLocationType`(IN iLocCd CHAR(2),
                                                               IN iLocCdFull VARCHAR(25))
    COMMENT 'Procdure to update a Location Type'
BEGIN
    UPDATE location_type SET loc_cd_full = iLocCdFull
    WHERE loc_cd = iLocCd;
END