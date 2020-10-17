<?php
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);
	
	//Sanitize
	$log_id = mysqli_real_escape_string($con, trim($request->log_id));
	$log_name = mysqli_real_escape_string($con, trim($request->log_name));
	$location_id = mysqli_real_escape_string($con, trim($request->location_id));

	//Store 
	$sql = "CALL sp_UpdateLogistics({$log_id},'{$log_name}',{$location_id})";
	if(mysqli_query($con,$sql)) {
		return http_response_code(201);
	}
	else {
		return http_response_code(422);
	}
}

?>
