<?php
//CROSSDOMAINS HEADERS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

//Appel CryptoLib
require_once('../lib/CryptoLib.php');

//Récupération des données
$data = json_decode(file_get_contents("php://input"));

use IcyApril\CryptoLib;

echo 'token' .PHP_EOL. $token2 .PHP_EOL;
echo 'salt' .PHP_EOL. $salt .PHP_EOL;
echo 'hash' .PHP_EOL. $hash .PHP_EOL;
//Traitement
$email = $data->{"email"};
$password = $data->{"password"};
$token = CryptoLib::randomString(16);

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
