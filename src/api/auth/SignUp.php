<?php
//CROSSDOMAINS HEADERS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
//Récupération des données
$data = json_decode(file_get_contents("php://input"));

//Traitement
$email = $data->{"email"};
$password = $data->{"password"};
$token = bin2hex(openssl_random_pseudo_bytes(16));
// if ($email == 'zod_2007@hotmail.fr') {
//   $token = bin2hex(openssl_random_pseudo_bytes(16));
//   $response = array("email"=>$email,
//                     "password"=>$password,
//                     "token"=>$token);
//
//
//   echo json_encode($response);
// } else {
//   $response = array("email"=>null,
//                     "password"=>null,
//                     "token"=>null);
//   echo json_encode($response);
// }

try {
  $bdd = new PDO('mysql:host=localhost;dbname=react', 'root', 'Fe6F8pt3');
  $req = $bdd->prepare('INSERT INTO users(Email, Password, Token) VALUES(:Email, :Password, :Token)');
  $req->execute(array(
	'Email' => $email,
	'Password' => password_hash($password, PASSWORD_DEFAULT),
	'Token' => $token
	));
  print_r($bdd->errorInfo());
}
catch (Exception $e)
{
// En cas d'erreur, on affiche un message et on arrête tout
die('Erreur : ' . $e->getMessage());
}
?>
