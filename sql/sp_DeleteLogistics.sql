-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$
CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_DeleteLogistics`(IN iId INT)
	COMMENT 'Procdure to delete a single Logistics item'
BEGIN
	DELETE FROM logistics where id = iId;
END