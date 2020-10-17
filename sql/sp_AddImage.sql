-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_AddImage`(IN iHTML VARCHAR(50),
                                                     IN iName VARCHAR(25))
    COMMENT 'Procdure to insert a single Image'
BEGIN
    INSERT INTO image (image_html,
                       image_name)
    VALUES (iHTML,
            iName);
END