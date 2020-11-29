<?php
if(isset($_POST["submit_post"])) {
    echo "My Father name is ".$_POST['father_name']. "<br/>";
    echo "My Mother name is ".$_POST['mother_name']. ".";
}
//
if(isset($_GET["submit_get"])) {
    echo "My Father name is ".$_GET['father_name']. "<br/>";
    echo "My Mother name is ".$_GET['mother_name']. ".";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Post Metod</title>
</head>
<body>
<h1>Post Method</h1>

    <form action="" method="POST">
    Father's Name : <input type="text" name="father_name" id="">
    Mother's Name : <input type="text" name="mother_name" id="">
    <input type="submit" value="Submit" name="submit_post">
    </form>
<h1>Get Method</h1>
<p>Data used to come on url</p>
    <form action="" method="GET">
    Father's Name : <input type="text" name="father_name" id="">
    Mother's Name : <input type="text" name="mother_name" id="">
    <input type="submit" value="Submit" name="submit_get">
    </form>

</body>
</html>