<?php include 'dbConn.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax From DB</title>
    <link rel="stylesheet" href="style.css">
    <!-- <link rel="stylesheet" href="bootstrap.min.css"> -->
    <script src="ajax.min.js"></script>

    <script>
    
            $(document).ready(function() {
                var dataCount = 2;
                console.log("loading");
                $("#btn").click(function() {
                    console.log("clicked");
                    dataCount = dataCount + 2;
                    $("#comments").load("loadData.php", {
                        dataNewCount: dataCount
                    });
                });
            });

    </script>

</head>
<body>

    <div id="comments">

    <?php
    
        $sql = "SELECT * from call_history LIMIT 2";
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

    </div>
    <button id="btn">Show Something</button>

</body>
</html>