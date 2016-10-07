<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
require_once('./db.class.php');
$data = file_get_contents("php://input");

$db = new db;
$getProfil = $db->getProfil($data);
$getUser = $db->getUser($getProfil->userID);
// var_dump($getUser);
echo json_encode((array)$getUser);
?>
