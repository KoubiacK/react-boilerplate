<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once('./db.class.php');

$data = json_decode(file_get_contents("php://input"));
$email = $data->{"email"}; //$data->{"email"}
$password = $data->{"password"};               //$data->{"password"}
$keep_logged = true;
$db = new db;

$user = $db->checkUser($email);
// var_dump(get_object_vars($user));
if (isset($user->ID))  //Si l'utilisateur existe
  {
    $user = $db->login($user->ID, $password); //on tente de le logger
    // var_dump(get_object_vars($user));

    if (isset($user->ID)) //Si les infos sont correctes
    {
      $credentials = array('ID' => $user->ID,
                           'Email' => $user->Email);
      $hash = $db->keep_logged($user->ID); //Création du hash
      // var_dump(get_object_vars($hash));
      $user = $db->getUser($user->ID);
      echo json_encode($return = array('hash' => $hash->hash ));
    }
  }
 ?>
