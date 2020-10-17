-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE PROCEDURE `scc`.`sp_AddUpcomingEvent` (IN iName VARCHAR(50),
											  IN iLocId INT,
											  IN iContId INT,
											  IN iDate DATE,
											  IN iTime TIME)

BEGIN
INSERT INTO event (event_name, loc_id, contact_id, e_date, e_time)
			VALUES (iName, iLocId, iContId, iDate, iTime);
END