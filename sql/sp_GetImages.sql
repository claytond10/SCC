-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetImages`()
    COMMENT 'Procdure to obtain list of Images'
BEGIN
    SELECT id, image_html, image_name
    FROM image;
END