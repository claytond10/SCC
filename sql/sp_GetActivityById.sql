-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetActivityById`(IN iId INT)
    COMMENT 'Procdure to obtain a single activity'
BEGIN
    SELECT id, activity_name
    FROM activity
    WHERE id = iID;
END