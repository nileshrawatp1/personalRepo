<?php

$serverName = "nilesh.ameyo.net";
$username = "postgres";
$password = "postgres";
$dbName = "ameyodb";

$conn = pg_connect("host=$serverName user=$username password=$password dbname=$dbName");

?>