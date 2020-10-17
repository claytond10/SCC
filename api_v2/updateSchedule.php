<?php
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);
	
	//Sanitize
	$schedule_id = mysqli_real_escape_string($con, trim($request->schedule_id));
	$schedule_date = mysqli_real_escape_string($con, trim($request->schedule_date));
	$schedule_time = mysqli_real_escape_string($con, trim($request->schedule_time));
	$activity_id = mysqli_real_escape_string($con, trim($request->activity_id));
	$activity_name = mysqli_real_escape_string($con, trim($request->activity_name));
	
	//Store 
	$sql = "CALL sp_UpdateSchedule({$schedule_id}, '{$schedule_date}', '{$schedule_time}', {$activity_id})";
	if(mysqli_query($con,$sql)) {
		return http_response_code(201);
	}
	else {
		return http_response_code(422);
	}
}
?>