-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_AddScripture`(IN iBook VARCHAR(45),
														 IN iChapter INT,
														 IN iVerse INT,
														 IN iText Varchar(255),
														 IN iDate Varchar(10))
    COMMENT 'Procdure to insert a single scripture'
BEGIN
    INSERT INTO scripture (book, chapter, verse, s_text, s_date)
    VALUES (iBook, iChapter, iVerse, iText, iDate);
END