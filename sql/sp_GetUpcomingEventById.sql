CREATE DEFINER=`scc_dba`@`%` PROCEDURE `sp_GetUpcomingEventById`(IN iId INT)
BEGIN
	SELECT e.id event_id, e.event_name, e.e_date event_date, e.e_time event_time, l.location_name location_name,
		   c.contact_name, l.id location_id, c.id contact_id
FROM event e LEFT JOIN location l ON (e.loc_id = l.id)
LEFT JOIN contact c ON (e.contact_id = c.id)
WHERE e.id = iID;	
END