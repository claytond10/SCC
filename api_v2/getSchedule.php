<?php
require 'connect.php';
$schedule = [];
$sql = "CALL sp_GetSchedule";
if ($result = mysqli_query($con,$sql)) {
	$cr = 0;
	while ($row = mysqli_fetch_assoc($result)) {	
		$schedule[$cr]['schedule_id'] = $row['schedule_id'];
		$schedule[$cr]['schedule_date'] = $row['schedule_date'];
		$schedule[$cr]['schedule_time'] = $row['schedule_time'];
		$schedule[$cr]['activity_id'] = $row['activity_id'];
		$schedule[$cr]['activity_name'] = $row['activity_name'];
		$cr++;
	}
	echo json_encode($schedule);
}
else {
	http_response_code(400);
}

?>
