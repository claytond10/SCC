<?php
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);
	
	//Sanitize
	$id = mysqli_real_escape_string($con, trim($request->id));
	$announcement = mysqli_real_escape_string($con, trim($request->announcement));
	
	//Store 
	$sql = "CALL sp_UpdateAnnouncement({$id},'{$announcement}')";
	if(mysqli_query($con,$sql)) {
		return http_response_code(201);
	}
	else {
		return http_response_code(422);
	}
}
?>