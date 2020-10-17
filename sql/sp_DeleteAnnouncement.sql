-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_DeleteAnnouncement`(IN iId INT)
    COMMENT 'Procdure to delete a single activity'
BEGIN
	DELETE FROM announcement where id = iId;
END