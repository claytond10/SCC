-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_DeleteUpcomingEvent`(IN iID INT)
BEGIN
	DELETE FROM event WHERE id = iID;
END