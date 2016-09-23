<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once('./db.class.php');

$data = json_decode(file_get_contents("php://input"));
$db = new db;
$userToLogout = $data->{"email"};
$LogOut = $db->LogOut($userToLogout);
var_dump($LogOut);
?>
