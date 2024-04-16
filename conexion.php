<?php
function conexion($dbname){
    $host ="localhost";
    $user ="d52024";
    $pass ="12345";
    
    $est = mysqli_connect($host, $user, $pass, $dbname);

    if ($est->connect_errno){
        die(utf8_decode("Fallo la conexion a MySQL: ".$est->connect_errno." ".mysqli_connect_error ()));
    }
    $est->set_charset('utf8');

    return $est;

}
?>