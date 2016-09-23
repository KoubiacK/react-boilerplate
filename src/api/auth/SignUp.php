<?php
//CROSSDOMAINS HEADERS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
// error_reporting(E_ALL);
// ini_set('display_errors', 1);
require_once('./db.class.php');

//Récupération des données
$data = json_decode(file_get_contents("php://input"));

$email = $data->{"email"};
$password = $data->{"password"};

$db = new db;
$user = $db->checkUser($email);

if (isset($user->ID))
{
  echo 'Utilisateur déjà enregistré';
}
else
{
  $signup = $db->signup($email, $password);
}
?>
