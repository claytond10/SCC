<?php
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);
	
	//Sanitize
	$loc_cd = mysqli_real_escape_string($con, trim($request->loc_cd));
	$loc_cd_full = mysqli_real_escape_string($con, trim($request->loc_cd_full));
	
	//Store 
	$sql = "CALL sp_AddLocationType('{$loc_cd}','{$loc_cd_full}')";
	if(mysqli_query($con,$sql)) {
		return http_response_code(201);
	}
	else {
		return http_response_code(422);
	}
}
?>
