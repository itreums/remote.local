<?php

$json = file_get_contents('php://input');
$obj = json_decode($json, true);


file_put_contents("command.json", $json);

echo json_encode($json);



?>

