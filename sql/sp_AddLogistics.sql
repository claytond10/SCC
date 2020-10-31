CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_AddLogistics`(IN iName VARCHAR(50),
										  IN iLocId INT, IN iImageId INT)
BEGIN
INSERT INTO logistics (log_name, loc_id, image_id)
			VALUES (iName, iLocId, iImageId);
END