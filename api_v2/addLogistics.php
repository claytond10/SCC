<?php
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);
	
	//Sanitize
	$log_name = mysqli_real_escape_string($con, trim($request->log_name));
	$loc_id = mysqli_real_escape_string($con, trim($request->loc_id));
	$image_id = mysqli_real_escape_string($con, trim($request->image_id));
	
	//Store 
	$sql = "CALL sp_AddLogistics('{$log_name}',{$loc_id},{$image_id})";
	if(mysqli_query($con,$sql)) {
		return http_response_code(201);
	}
	else {
		return http_response_code(422);
	}
}

?>
