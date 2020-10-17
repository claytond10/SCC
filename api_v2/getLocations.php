<?php
require 'connect.php';
$locations = [];
$sql = "CALL sp_GetLocations";
if ($result = mysqli_query($con,$sql)) {
	$cr = 0;
	while ($row = mysqli_fetch_assoc($result)) {	
		$locations[$cr]['id'] = $row['id'];
		$locations[$cr]['location_name'] = $row['location_name'];
		$locations[$cr]['loc_cd'] = $row['loc_cd'];
		$locations[$cr]['loc_cd_full'] = $row['loc_cd_full'];
		$locations[$cr]['image_id'] = $row['image_id'];
		$locations[$cr]['image_html'] = $row['image_html'];
		$cr++;
	}
	echo json_encode($locations);
}
else {
	http_response_code(400);
}

?>
