<?php
    $connection = new mysqli("localhost", "root", "", "cine-plus");
    if ($connection->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $connection->connect_errno . ") " . $connection->connect_error;
    }
    
    //echo $connection->host_info . "\n";
?>