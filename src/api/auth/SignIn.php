<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
// error_reporting(E_ALL);
// ini_set('display_errors', 1);
$data = json_decode(file_get_contents("php://input"));

//Appel CryptoLib
require_once('../lib/CryptoLib.php');

use IcyApril\CryptoLib;

//On récupère les valeurs envoyées
$email = $data->{"email"};
$password = $data->{"password"};

$bdd = new PDO('mysql:host=localhost;dbname=react', 'root', 'Fe6F8pt3');
$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try {
  $req = $bdd->prepare('SELECT * FROM users WHERE Email = :email');
  $req->bindParam('email', $email, PDO::PARAM_STR);
  $req->execute();
  $res = $req->fetchAll(PDO::FETCH_ASSOC);
  if($req->rowCount()) {
    $err_status = false;
    $error_message = "";
    // var_dump($res);
    if (!password_verify($password, $res[0]['Password'])) {
      $err_status = true;
      $error_message = "WRONG_PASSWORD";
    }

    // $req = $bdd->prepare('INSERT INTO users_online( userID, token, hash) VALUES :userID, :token, :hash');
    // $req->bindParam('userID', $res[0]['ID'], PDO::PARAM_INT);
    // $req->bindParam('email', $res[0]['Token'], PDO::PARAM_STR);
    // $req->bindParam('email', $email, PDO::PARAM_STR);
    // $req->execute();
    // $res = $req->fetchAll(PDO::FETCH_ASSOC);
    $response = array("error"=> array("status" => $err_status, "message"=> $error_message),
                      "email"=>$res[0]['Email'],
                      "password"=>$res[0]['Password'],
                      "token"=>$res[0]['Token']);
    echo json_encode($response);
  } else {
    $response = array("error"=> array("status" => true, "message"=> "NO_USER"));
    echo json_encode($response);

    // Generate a token of 16 char with the library by calling the randomString method.
    $token = CryptoLib::randomString(16);
    echo $token;
    // Generate a salt with the library by calling the generateSalt method
    $salt = CryptoLib::generateSalt();
    // Hash the token with the salt that was generated
    $hash = CryptoLib::hash($token, $salt);

    $isHashCorrect = CryptoLib::validateHash($hash, $token);

    echo PHP_EOL. $isHashCorrect;
  }

  $req->closeCursor();
}
catch (PDOException $e)
{
	die($e->getMessage());
}
?>
