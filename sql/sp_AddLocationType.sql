-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_AddLocationType`(IN iLocCd CHAR(2),
                                                            IN iLocCdFull VARCHAR(25))
    COMMENT 'Procdure to insert a single Location Type'
BEGIN
    INSERT INTO location_type (loc_cd,
                               loc_cd_full)
    VALUES (iLocCd,
            iLocCdFull);
END