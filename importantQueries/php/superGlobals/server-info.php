<?php

// ! SERVER INFORMATION
    $server = [
        'HostName' => $_SERVER['SERVER_NAME'],
        'HostPort' => $_SERVER['SERVER_PORT'],
        'Server Software' => $_SERVER['SERVER_SOFTWARE'],
        'Document Root' => $_SERVER['DOCUMENT_ROOT'],
        'Current Page' => $_SERVER['PHP_SELF'],
        'Script Name' => $_SERVER['SCRIPT_NAME'],
        'File Full Path' => $_SERVER['SCRIPT_FILENAME']
    ];

    // print_r($server);
    
    // ? echo $server['HostName'] . ':' . $server['HostHeader'];

// ! CLIENT INFORMATION 

    $client = [
        'ClientServerInfo' => $_SERVER['HTTP_USER_AGENT'],
        'ClientIP' => $_SERVER['REMOTE_ADDR'],
        'Remote Port' => $_SERVER['REMOTE_PORT']
    ];

    // print_r($client);



?>