-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_UpdateImage`(IN iID INT, 
                                                        IN iHTML VARCHAR(50),
                                                        IN iName VARCHAR(25))
    COMMENT 'Procdure to update an Image'
BEGIN
    UPDATE image SET image_html = iHTML,
                     image_name = iName
    WHERE id = iID;
END