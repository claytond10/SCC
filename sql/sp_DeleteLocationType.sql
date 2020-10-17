-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$
CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_DeleteLocationType`(IN iId CHAR(2))
	COMMENT 'Procdure to delete a single Location Type'
BEGIN
	DELETE FROM location_type where loc_cd = iId;
END