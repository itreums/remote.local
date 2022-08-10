<?php 
include "../server/db.php"; 

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$name = "remote";

$response=array(
    "status"=>false,
    "extData"=>$data
);

if($data['device']=="ext_"){
// if(true){
    $linkID=$data['linkID'];

    $hash = md5($data['linkID'] . $name);


    if (!$conn) {
        echo json_encode($response);
        die("Connection failed: " . mysqli_connect_error());

    } 
        
        $sql = "INSERT INTO users (linkID,token) VALUES ('$linkID','$hash')";


    if (mysqli_query($conn, $sql)) {
        $response['status']=true;
        $response['extData']['hash']=$hash;
        echo json_encode($response);
    } else {
        
        echo json_encode($response);
    }


    mysqli_close($conn);
    
 

}else{
    echo json_encode($response);
}


    



?>