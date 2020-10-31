<?php
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);
	
	//Sanitize
	$location_name = mysqli_real_escape_string($con, trim($request->location_name));
	$loc_cd = mysqli_real_escape_string($con, trim($request->loc_cd));

	//Store 
	$sql = "CALL sp_AddLocation('{$location_name}','{$loc_cd}')";
	if(mysqli_query($con,$sql)) {
		return http_response_code(201);
	}
	else {
		return http_response_code(422);
	}
}

?>
