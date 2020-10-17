<?php
require 'connect.php';
$contacts = [];
$sql = "CALL sp_GetContacts";
if ($result = mysqli_query($con,$sql)) {
	$cr = 0;
	while ($row = mysqli_fetch_assoc($result)) {	
		$contacts[$cr]['id'] = $row['id'];
		$contacts[$cr]['contact_name'] = $row['contact_name'];
		$contacts[$cr]['phone'] = $row['phone'];
		$contacts[$cr]['email'] = $row['email'];
		$cr++;
	}
	echo json_encode($contacts);
}
else {
	http_response_code(400);
}

?>
