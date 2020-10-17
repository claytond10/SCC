-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetAnnouncements`()
    COMMENT 'Procdure to obtain list of announcements'
BEGIN
    SELECT id, announcement
    FROM announcement;
END