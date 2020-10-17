<?php
require 'connect.php';
$id = $_GET['id'];
echo $sql = "CALL sp_DeleteScripture({$id})";
if(mysqli_query($con,$sql)) {
	return http_response_code(204);
}
else {
	return http_response_code(422);
}

?>
