-- --------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- --------------------------------------------------------------------------------
DELIMITER $$

CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetLogistics`()
BEGIN
	SELECT log.id log_id, log.log_name log_name, img.id image_id, loc.id location_id,
		   img.image_name, img.image_html image_html, loc.location_name location_name
	FROM logistics log LEFT JOIN location loc ON (log.loc_id = loc.id)
					   LEFT JOIN image img ON (loc.image_id = img.id);
END