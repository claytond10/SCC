<?php
require 'connect.php';
$id = $_GET['id'];
$sql = "CALL sp_GetUpcomingEventById({$id})";
$result = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($result);	
echo json_encode($row);
?>
