CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_UpdateSchedule`(IN iId INT,
												IN iDate VARCHAR(10),
												IN iTime VARCHAR(10),
                                                IN iActId INT)
BEGIN
	UPDATE schedule SET s_date = iDate,
					 s_time = iTime,
                     activity_id = iActId
	WHERE id = iId;
END