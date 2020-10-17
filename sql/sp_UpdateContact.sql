-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_UpdateContact`(IN iID INT,
                                                          IN iName VARCHAR(50),
                                                          IN iPhone VARCHAR(12),
                                                          IN iEmail VARCHAR(50))
    COMMENT 'Procdure to update a Contact'
BEGIN
    UPDATE contact SET contact_name = iName,
                       phone = iPhone,
                       email = iEmail
    WHERE id = iID;
END