<?php 
include "../server/db.php"; 

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$name = "remote";

$response=array(
    "status"=>false,
    "hash"=>""
);

// if(true){
if($data['device']=="app_"){

    $linkID=$data['linkID'];
    $name=$data['name'];
    // $linkID="corv864049436";
    // $name="lena";

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "SELECT token FROM users WHERE linkID='$linkID'";
    $result = $conn->query($sql);
    
    if ($result->num_rows == 1) {
    
        $row = $result->fetch_assoc();

        $sql = "UPDATE users SET name='$name' WHERE linkID='$linkID'";

        if (mysqli_query($conn, $sql)) {
            $response['status']=true;
            $response['hash']=$row["token"];
            echo json_encode($response);
            // echo "Record updated successfully";

        } else {
            echo json_encode($response);
            // echo "Error updating record: " . mysqli_error($conn);
        }
        

    } else {
        echo json_encode($response);
        // echo "0 results";
    }
    $conn->close();

    
}else{
    echo json_encode($response);
}





  



?>