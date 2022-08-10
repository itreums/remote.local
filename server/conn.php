<? 

header('Cache-Control: no-cache');
header("Content-Type: text/event-stream\n\n");
include "../server/db.php"; 
set_time_limit(0);
echo "eventListener...";
$id=0;
while (1) {
    $curDate=date("H:i:s");
    // $command=file_get_contents("command.json");
    
    // $array=json_decode($command,true);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $sql = "SELECT request FROM users";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
    
        while($row = mysqli_fetch_assoc($result)) {

            $array=json_decode($row['request'],true);
            if(!isset($array['silence'])){
                echo 'id:'.$id++;
                echo "\n\n";
                echo "event: ".$array['hash']."\n";
                echo 'data:'. $row['request'];
                echo "\n\n";
            }
        }
    
    }else {
        // echo "0 results";
    }

    ob_end_flush();
    flush();
    sleep(2);
}


?>