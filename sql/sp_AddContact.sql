-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_AddContact`(IN iName VARCHAR(50),IN iPhone VARCHAR(12),IN iEmail VARCHAR(50))
    COMMENT 'Procdure to insert a single Contact'
BEGIN
    INSERT INTO contact (contact_name, phone, email)
    VALUES (iName, iPhone, iEmail);
END