<?php
require 'connect.php';
$loc_cd = $_GET['id'];
$sql = "CALL sp_DeleteLocationType('{$loc_cd}')";
if(mysqli_query($con,$sql)) {
	return http_response_code(204);
}
else {
	return http_response_code(422);
}
?>
