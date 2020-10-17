<?php
require 'connect.php';
$logistics = [];
$sql = "CALL sp_GetLogistics";
if ($result = mysqli_query($con,$sql)) {
	$cr = 0;
	while ($row = mysqli_fetch_assoc($result)) {	
		$logistics[$cr]['log_id'] = $row['log_id'];
		$logistics[$cr]['log_name'] = $row['log_name'];
		$logistics[$cr]['image_id'] = $row['image_id'];
		$logistics[$cr]['loc_id'] = $row['loc_id'];
		$logistics[$cr]['image_name'] = $row['image_name'];
		$logistics[$cr]['image_html'] = $row['image_html'];
		$logistics[$cr]['location_name'] = $row['location_name'];
		$cr++;
	}
	echo json_encode($logistics);
}
else {
	http_response_code(400);
}

?>
