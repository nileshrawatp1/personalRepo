<?php

include 'dbConn.php';

    $dataNewCountReceived = $_POST['dataNewCount'];
    
    $sql = "SELECT * from call_history LIMIT $dataNewCountReceived";
    $result = pg_query($conn, $sql);
    if(pg_num_rows($result) > 0) {
        while ($data = pg_fetch_assoc($result)){
            echo "<p>";
            echo $data['src_phone'];
            echo "<br>";
            echo $data['date_added'];
            echo "</p>";
        }
    } else {
        echo "Thare are no results";
    }

?>