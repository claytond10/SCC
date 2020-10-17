<?php
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);
	
	//Sanitize
	$id = mysqli_real_escape_string($con, trim($request->id));
	$activity_name = mysqli_real_escape_string($con, trim($request->activity_name));
	
	//Store 
	$sql = "CALL sp_AddActivity('{$activity_name}')";
if(mysqli_query($con,$sql)) {
	return http_response_code(201);
}
else {
	return http_response_code(422);
}
}

?>
