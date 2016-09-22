<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once('../lib/CryptoLib.php'); 
use IcyApril\CryptoLib;

// error_reporting(E_ALL);
// ini_set('display_errors', 1);
$data = json_decode(file_get_contents("php://input"));

//On récupère les valeurs envoyées
$email = $data->{"email"};
$password = $data->{"password"};

$bdd = new PDO('mysql:host=localhost;dbname=react', 'root', 'Fe6F8pt3');
$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try {
  $req = $bdd->prepare('SELECT * FROM users WHERE Email = \'zod_2007@hotmail.fr\'');
  $req->bindParam('email', $email, PDO::PARAM_STR);
  $req->execute();
  $res = $req->fetchAll(PDO::FETCH_ASSOC);

  //If user exist
  // if($req->rowCount()) {
    $err_status = false;
    $error_message = "";
    // var_dump($res);

    //Password Check
    if (!password_verify($password, $res[0]['Password'])) {
      $err_status = true;
      $error_message = "WRONG_PASSWORD";
    }

    //
    //Log Persistence
    //

    //Token creation via Cryptolib

    $token = CryptoLib::randomString(16);
    $salt = CryptoLib::generateSalt();
    $hash = CryptoLib::hash($token, $salt);

    //Req
    $req = $bdd->prepare('INSERT INTO users_online(userID, salt, hash) VALUES (:userID, :salt, :hash)');
    $req->bindParam('userID', $res[0]['ID'], PDO::PARAM_INT);
    $req->bindParam('salt', $salt, PDO::PARAM_STR);
    $req->bindParam('hash', $hash, PDO::PARAM_STR);
    $req->execute();

    $response = array("error"=> array("status" => $err_status, "message"=> $error_message),
                      "email"=>$res[0]['Email'],
                      "password"=>$res[0]['Password'],
                      "token"=>$hash);
    echo json_encode($response);

  // } else {
  //   $response = array("error"=> array("status" => true, "message"=> "NO_USER"));
  //   echo json_encode($response);
  //
  // }

  $req->closeCursor();
}
catch (PDOException $e)
{
	die($e->getMessage());
}
?>
