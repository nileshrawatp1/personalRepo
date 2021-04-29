<?php

// ! To get the full URL of the host
$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

// OUTPUT ==>> https://nilesh.ameyo.net:8785/practice/php/loginPage/includes/dbh.inc.php

$serverName = "nilesh.ameyo.net";
$username = "postgres";
$password = "postgres";
$dbName = "ameyodb";

$conn = pg_connect("host=$serverName user=$username password=$password dbname=$dbName");

?>
