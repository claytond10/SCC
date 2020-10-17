<?php
require 'connect.php';
$images = [];
$sql = "CALL sp_GetImages";
if ($result = mysqli_query($con,$sql)) {
	$cr = 0;
	while ($row = mysqli_fetch_assoc($result)) {	
		$images[$cr]['id'] = $row['id'];
		$images[$cr]['image_html'] = $row['image_html'];
		$images[$cr]['image_name'] = $row['image_name'];
		$cr++;
	}
	echo json_encode($images);
}
else {
	http_response_code(400);
}
?>
