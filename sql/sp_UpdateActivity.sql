-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_UpdateActivity`(IN iID INT, IN iName VARCHAR(50))
    COMMENT 'Procdure to update an Activity'
BEGIN
    UPDATE activity SET activity_name = iName
    WHERE id = iID;
END