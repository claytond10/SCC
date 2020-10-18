-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_UpdateAnnouncement`(IN iId INT,
                                                               IN iAnnounce VARCHAR(100))
    COMMENT 'Procdure to update an Announcement'
BEGIN
    UPDATE announcement SET announcement = iAnnounce
    WHERE id = iId;
END
