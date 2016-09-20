<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

//Appel CryptoLib
require_once('../lib/CryptoLib.php');

$data = json_decode(file_get_contents("php://input"));

use IcyApril\CryptoLib;

$email = $data->{"email"};
$password = $data->{"password"};
if ($email == 'zod_2007@hotmail.fr') {
  $token = bin2hex(openssl_random_pseudo_bytes(16));
  $response = array("email"=>$email,
                    "password"=>$password,
                    "token"=>$token);


  echo json_encode($response);
} else {
  $response = array("email"=>null,
                    "password"=>null,
                    "token"=>null);
  echo json_encode($response);
}

?>
