-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE PROCEDURE `scc`.`sp_UpdateLocation` (IN iId INT,
											IN iName VARCHAR(50),
											IN iLocCD CHAR(2))
BEGIN
	UPDATE location SET location_name = iName,
						loc_cd = iLocCd
	WHERE id = iId;
END