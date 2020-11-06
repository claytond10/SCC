-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetContactById`(IN iId INT)
    COMMENT 'Procdure to obtain a single Contact'
BEGIN
    SELECT id, contact_name, phone, email
    FROM contact
    WHERE id = iId;
END