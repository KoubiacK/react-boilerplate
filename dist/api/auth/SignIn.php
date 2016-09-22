<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once('./db.class.php');

$data = json_decode(file_get_contents("php://input"));
$email = 'zod_2007@hotmail.fr'; //$data->{"email"}
$password = 'zzz';               //$data->{"password"}
$db = new db;
$user = $db->login($email, $password);

var_dump(get_object_vars($user));
 ?>
