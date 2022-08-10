<?




$json = file_get_contents('php://input');
$obj = json_decode($json, true);

// $who=$obj['who'];
// $action = $obj["action"];
// $site = $obj["site"];



// $comment = $obj["comment"];
// $json=array(
//     "who"=>"vaca"
// );
file_put_contents("command.json", $json);



echo json_encode($json);

// $r=file_get_contents("command.json");
// $d=json_decode($r,true);

// echo $d["who"];



