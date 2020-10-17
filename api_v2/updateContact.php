<?php
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);
	
	//Sanitize
	$id = mysqli_real_escape_string($con, trim($request->id));
	$contact_name = mysqli_real_escape_string($con, trim($request->contact_name));
	$phone = mysqli_real_escape_string($con, trim($request->phone));
	$email = mysqli_real_escape_string($con, trim($request->email));
	
	//Store 
	$sql = "CALL sp_UpdateContact({$id},'{$contact_name}','{$phone}','{$email}')";
	if(mysqli_query($con,$sql)) {
		return http_response_code(201);
	}
	else {
		return http_response_code(422);
	}
}
?>