-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetScheduleById`(IN iId INT)
BEGIN
	SELECT s.id schedule_id, s.s_date schedule_date, s.s_time schedule_time,
		   a.id activity_id, a.activity_name activity_name 
	FROM schedule s 
	INNER JOIN activity a ON (s.activity_id = a.id)
	WHERE s.id = iId;
END