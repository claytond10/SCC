-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_AddLogistics`(IN iName VARCHAR(50),
										  IN iLocId INT)
BEGIN
INSERT INTO logistics (log_name, loc_id)
			VALUES (iName, iLocId);
END