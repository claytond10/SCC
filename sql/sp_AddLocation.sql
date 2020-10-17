-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_AddLocation`(IN iLocationName VARCHAR(50),
                                                       IN iLocCd CHAR(2),
                                                       IN iImageId INT
)
    COMMENT 'Procdure to insert a single activity'
BEGIN
    INSERT INTO location (location_name, loc_cd, image_id)
    VALUES (iLocationName,iLocCd,iImageId);
END