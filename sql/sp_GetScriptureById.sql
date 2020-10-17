-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetScriptureById`(IN iId INT)
    BEGIN
        SELECT id, book, chapter, verse, s_text, s_date
        FROM scripture
    WHERE id = iId;
END