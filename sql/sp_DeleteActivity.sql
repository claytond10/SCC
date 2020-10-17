-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$
CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_DeleteActivity`(IN iId INT)
	COMMENT 'Procdure to delete a single Activity'
BEGIN
	DELETE FROM activity where id = iId;
END