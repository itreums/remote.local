<?php
$servernameDB = "192.168.1.38";
// $servernameDB = "remote.control";
$usernameDB = "root";
$passwordDB = "root";
$nameDB = "remote_control";

// Create connection
$conn = mysqli_connect($servernameDB, $usernameDB, $passwordDB,$nameDB);

?>