<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
require_once('./db.class.php');

$data = json_decode(file_get_contents("php://input"));
$ID = $data->{"ID"};
$hash = $data->{"hash"};
$db = new db;
$relog = $db->relog($ID, $hash);
$User = $db->getUser($relog->userID);
echo json_encode($return = array('Email' => $User->Email ));
 ?>
