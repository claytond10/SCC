-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_AddSchedule`(IN iDate VARCHAR(10),
														IN iTime VARCHAR(10),
														IN iActId INT)
    COMMENT 'Procdure to insert a single Schedule item'
BEGIN
    INSERT INTO schedule (s_date, s_time, activity_id)
    VALUES (iDate, iTime, iActId);
END