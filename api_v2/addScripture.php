<?php
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);
	
	//Sanitize
	$id = mysqli_real_escape_string($con, trim($request->id));
	$book = mysqli_real_escape_string($con, trim($request->book));
	$chapter = mysqli_real_escape_string($con, trim($request->chapter));
	$verse = mysqli_real_escape_string($con, trim($request->verse));
	$s_text = mysqli_real_escape_string($con, trim($request->s_text));
	$s_date = mysqli_real_escape_string($con, trim($request->s_date));
	
	//Store 
	$sql = "CALL sp_AddScripture({$id},'{$book}', {$chapter}, {$verse}, '{$s_text}', '{$s_date}',)";
if(mysqli_query($con,$sql)) {
	return http_response_code(201);
}
else {
	return http_response_code(422);
}
}

?>
