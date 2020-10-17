-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetImageById`(IN iId INT)
    COMMENT 'Procdure to obtain a single Image'
BEGIN
    SELECT id, image_html, image_name
    FROM image
    WHERE id = iId;
END