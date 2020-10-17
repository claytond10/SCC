-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$
CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_DeleteImage`(IN iId INT)
	COMMENT 'Procdure to delete a single Image'
BEGIN
	DELETE FROM image where id = iId;
END