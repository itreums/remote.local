<?php
include "../server/db.php"; 



$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$response=array(
    "saveStatus"=>false,
);

$hash=substr($obj['hash'], 4);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} 
    

$s_json = mysqli_real_escape_string($conn, $json);
$sql = "UPDATE users SET request='$s_json' WHERE token='$hash'";


if (mysqli_query($conn, $sql)) {
    $response['saveStatus']=true;
    echo json_encode($response);
} else {
    // echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    // echo json_encode($hash);
    echo json_encode(mysqli_error($conn));
    // echo json_encode($response);
}


mysqli_close($conn);

// file_put_contents("command.json", $json);

// echo json_encode($json);



?>