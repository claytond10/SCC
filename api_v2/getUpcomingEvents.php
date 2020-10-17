<?php
require 'connect.php';
$activities = [];
$sql = "CALL sp_GetUpcomingEvents";
if ($result = mysqli_query($con,$sql)) {
	$cr = 0;
	while ($row = mysqli_fetch_assoc($result)) {	
		$activities[$cr]['event_id'] = $row['event_id'];
		$activities[$cr]['event_name'] = $row['event_name'];
		$activities[$cr]['event_date'] = $row['event_date'];
		$activities[$cr]['event_time'] = $row['event_time'];
		$activities[$cr]['location_id'] = $row['location_id'];
		$activities[$cr]['location_name'] = $row['location_name'];
		$activities[$cr]['contact_id'] = $row['contact_id'];
		$activities[$cr]['contact_name'] = $row['contact_name'];
		$cr++;
	}
	echo json_encode($activities);
}
else {
	http_response_code(400);
}

?>
