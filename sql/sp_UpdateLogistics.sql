-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_UpdateLogistics`(IN iId INT,
												IN iName VARCHAR(50),
												IN iLocId INT)
BEGIN
	UPDATE logistics SET log_name = iName,
					 loc_id = iLocId
	WHERE id = iId;
END