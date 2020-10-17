-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$
CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_DeleteLocation`(IN iId INT)
	COMMENT 'Procdure to delete a single Location'
BEGIN
	DELETE FROM location where id = iId;
END