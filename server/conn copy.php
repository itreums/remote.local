<? 
// old version!
header('Cache-Control: no-cache');
header("Content-Type: text/event-stream\n\n");

set_time_limit(0);
echo "eventListener...";
$id=0;
while (1) {
    $curDate=date("H:i:s");
    $command=file_get_contents("command.json");
    
    $array=json_decode($command,true);
    
    
    if($array!=""){
        
        echo 'id:'.$id++;
        echo "\n\n";
        echo "event: ".$array['hash']."\n";
        echo 'data:'. $command;
        echo "\n\n";
        
    }
    

    ob_end_flush();
    flush();
    sleep(2);
}


?>