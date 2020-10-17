-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetContacts`()
    COMMENT 'Procdure to obtain list of Contacts'
BEGIN
    SELECT id, contact_name, phone, email
    FROM contact;
END