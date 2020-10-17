<?php
require 'connect.php';
$scriptures = [];
$sql = "CALL sp_GetScriptures";
if ($result = mysqli_query($con,$sql)) {
	$cr = 0;
	while ($row = mysqli_fetch_assoc($result)) {	
		$scriptures[$cr]['id'] = $row['id'];
        $scriptures[$cr]['book'] = $row['book'];
        $scriptures[$cr]['chapter'] = $row['chapter'];
        $scriptures[$cr]['verse'] = $row['verse'];
        $scriptures[$cr]['s_text'] = $row['s_text'];
		$scriptures[$cr]['s_date'] = $row['s_date'];
		$cr++;
	}
	echo json_encode($scriptures);
}
else {
	http_response_code(400);
}

?>
