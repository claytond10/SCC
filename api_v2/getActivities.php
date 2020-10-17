<?php
require 'connect.php';
$activities = [];
$sql = "CALL sp_GetActivities";
if ($result = mysqli_query($con,$sql)) {
	$cr = 0;
	while ($row = mysqli_fetch_assoc($result)) {	
		$activities[$cr]['id'] = $row['id'];
		$activities[$cr]['activity_name'] = $row['activity_name'];
		$cr++;
	}
	echo json_encode($activities);
}
else {
	http_response_code(400);
}

?>
