-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_AddActivity`(IN iActivity VARCHAR(50))
    COMMENT 'Procdure to insert a single activity'
BEGIN
    INSERT INTO activity (activity_name)
    VALUES (iActivity);
END