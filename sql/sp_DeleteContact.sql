-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_DeleteContact`(IN iId INT)
	COMMENT 'Procdure to delete a single Contact'
BEGIN
	DELETE FROM contact where id = iId;
END