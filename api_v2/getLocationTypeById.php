<?php
    require 'connect.php';
    $loc_cd = $_GET['id'];
    $sql = "CALL sp_GetLocationTypeById('{$loc_cd}')";
    $result = mysqli_query($con,$sql);
    $row = mysqli_fetch_assoc($result);	
    echo json_encode($row);
?>
