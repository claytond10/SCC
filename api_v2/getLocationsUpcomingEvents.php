<?php
require 'connect.php';
$locations = [];
$sql = "CALL sp_GetLocationsUpcomingEvents";
if ($result = mysqli_query($con,$sql)) {
	$cr = 0;
	while ($row = mysqli_fetch_assoc($result)) {	
		$locations[$cr]['id'] = $row['id'];
		$locations[$cr]['location_name'] = $row['location_name'];
		$cr++;
	}
	echo json_encode($locations);
}
else {
	http_response_code(400);
}

?>
