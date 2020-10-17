<?php
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);
	
	//Sanitize
	$event_name = mysqli_real_escape_string($con, trim($request->event_name));
	$location_id = mysqli_real_escape_string($con, trim($request->location_id));
	$contact_id = mysqli_real_escape_string($con, trim($request->contact_id));
	$event_date = mysqli_real_escape_string($con, trim($request->event_date));
	$event_time = mysqli_real_escape_string($con, trim($request->event_time));	

	//Store 
	$sql = "CALL sp_AddUpcomingEvent('{$event_name}',{$location_id},{$contact_id},'{$event_date}','{$event_time}')";
	if(mysqli_query($con,$sql)) {
		return http_response_code(201);
	}
	else {
		return http_response_code(422);
	}
}

?>
