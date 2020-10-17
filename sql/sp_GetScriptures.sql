-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE PROCEDURE `scc`.`sp_GetScriptures` ()
BEGIN
	SELECT id, book, chapter, verse, s_text, s_date
	FROM scripture;
END