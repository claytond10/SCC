<?php
require 'connect.php';
$id = $_GET['id'];
$sql = "CALL sp_DeleteUpcomingEvent('{$id}')";
if(mysqli_query($con,$sql)) {
	return http_response_code(204);
}
else {
	return http_response_code(422);
}
?>
