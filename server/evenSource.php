<? 

header('Cache-Control: no-cache');
header("Content-Type: text/event-stream\n\n");
require_once("../server/db.php"); 
set_time_limit(0);
echo "eventListener...";
$id=0;
while (1) {
    $curDate=date("H:i:s");
    // $command=file_get_contents("command.json");
    
    if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
    }
      
    $sql = "SELECT request FROM users";
    $result = mysqli_query($conn, $sql);
      
    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {

            $array=json_decode($row['request'],true);

            if($array!=""){
                
                echo 'id:'.$id++;
                echo "\n\n";
                // echo "event:".$array['hash']."\n";
                // echo 'data:'. $row['request'];
                echo "event:"."fffff"."\n";
                echo 'data:'."asdaad";
                echo "\n\n";
                
            }

        }
    } else {
        // echo "0 results";
    }
      
    // mysqli_close($conn); 

    ob_end_flush();
    flush();
    sleep(2);
}


?>