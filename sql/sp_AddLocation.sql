CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_AddLocation`(IN iLocationName VARCHAR(50),
                                                       IN iLocCd CHAR(2))
    COMMENT 'Procdure to insert a single activity'
BEGIN
    INSERT INTO location (location_name, loc_cd)
    VALUES (iLocationName,iLocCd);
END