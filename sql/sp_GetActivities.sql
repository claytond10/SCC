-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetActivities`()
    COMMENT 'Procdure to obtain list of activities'
BEGIN
    SELECT id, activity_name
    FROM activity;
END