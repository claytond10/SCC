-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetAnnouncementById`(IN iId INT)
    COMMENT 'Procdure to obtain a single Announcement'
BEGIN
    SELECT id, announcement
    FROM announcement
    WHERE id = iId;
END