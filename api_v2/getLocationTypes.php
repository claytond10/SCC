<?php
require 'connect.php';
$locationTypes = [];
$sql = "CALL sp_GetLocationTypes";
if ($result = mysqli_query($con,$sql)) {
	$cr = 0;
	while ($row = mysqli_fetch_assoc($result)) {	
		$locationTypes[$cr]['loc_cd'] = $row['loc_cd'];
		$locationTypes[$cr]['loc_cd_full'] = $row['loc_cd_full'];
		$cr++;
	}
	echo json_encode($locationTypes);
}
else {
	http_response_code(400);
}
?>
