-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE PROCEDURE `scc`.`sp_UpdateUpcomingEvent` (IN iId INT,
												IN iName VARCHAR(50),
												IN iLocId INT,
												IN iContId INT,
												IN iDate VARCHAR(10),
												IN iTime VARCHAR(10))
BEGIN
	UPDATE event SET event_name = iName,
					 loc_id = iLocId,
					 contact_id = iContId,
					 e_date = iDate,
					 e_time = iTime
	WHERE id = iId;
END