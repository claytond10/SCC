-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_AddAnnouncement`(IN iAnnouncement VARCHAR(100))
    COMMENT 'Procdure to insert a single announcement'
BEGIN
    INSERT INTO announcement (announcement)
    VALUES (iAnnouncement);
END