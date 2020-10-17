<?php
require 'connect.php';
$announcements = [];
$sql = "CALL sp_GetAnnouncements";
if ($result = mysqli_query($con,$sql)) {
	$cr = 0;
	while ($row = mysqli_fetch_assoc($result)) {	
		$announcements[$cr]['id'] = $row['id'];
		$announcements[$cr]['announcement'] = $row['announcement'];
		$cr++;
	}
	echo json_encode($announcements);
}
else {
	http_response_code(400);
}

?>
