<?php
require_once('../lib/CryptoLib.php');
use IcyApril\CryptoLib;

  class db
  {
    private $connection;

        public function __construct(PDO $connection = null)
        {
            $this->connection = $connection;
            if ($this->connection === null) {
                $this->connection = new PDO(
                        'mysql:host=localhost;dbname=react',
                        'root',
                        'Fe6F8pt3'
                    );
                $this->connection->setAttribute(
                    PDO::ATTR_ERRMODE,
                    PDO::ERRMODE_EXCEPTION
                );
            }
        }

        public function checkUser($email)
        {
          $sql = 'SELECT ID FROM users WHERE Email = :Email';
          $req = $this->connection->prepare($sql);
          $req->bindParam(':Email', $email);
          $req->execute();
          $req->setFetchMode(PDO::FETCH_OBJ);
          $res= $req->fetch();

          if (isset($res->ID))
          {
            $return = $res;
          }
          else
          {
            $return = (object)['error' => 'Unkown Mail'];
          }

          return $return;
        }

        public function getUser($ID)
        {
          $sql = 'SELECT * FROM users WHERE ID = :ID';
          $req = $this->connection->prepare($sql);
          $req->bindParam(':ID', $ID);
          $req->execute();
          $req->setFetchMode(PDO::FETCH_OBJ);
          $res= $req->fetch();

          if (isset($res->ID))
          {
            $return = $res;
          }
          else
          {
            $return = (object)['error' => 'Unkown Mail'];
          }

          return $return;
        }

        public function login($ID, $password)
        {
          $sql = 'SELECT * FROM users WHERE ID = :ID';
          $req = $this->connection->prepare($sql);
          $req->bindParam(':ID', $ID);
          $req->execute();
          $req->setFetchMode(PDO::FETCH_OBJ);
          $res= $req->fetch();

          $return = $res;

          if (!password_verify($password, $res->Password)) {
            $return = (object)['error' => 'Incorrect password'];
          }

            return $return;
        }

        public function keep_logged($ID)
        {
          if (isset($ID)) {
            //Cryptolib based Hash Generation
            $token = CryptoLib::randomString(16);
            $salt = CryptoLib::generateSalt();
            $hash = CryptoLib::hash($token, $salt);

            //DB INSERTION
            $sql = 'INSERT INTO users_online(userID, salt, hash) VALUES(:userID, :salt, :hash)';
            $req = $this->connection->prepare($sql);
            $req->bindParam(':userID', $ID);
            $req->bindParam(':salt', $salt);
            $req->bindParam(':hash', $hash);
            $req->execute();

            $return = (object)['hash' => CryptoLib::hash($ID, $salt).'.'.$hash];

          } else {
            $return = (object)['error' => 'keep_logged: Pas d`ID'];
          }
          return $return;
        }

        public function signup($email, $password)
        {
            $password = password_hash($password, PASSWORD_DEFAULT);

            $sql = 'INSERT INTO users(Email, Password) VALUES(:Email, :Password)';
            $req = $this->connection->prepare($sql);
            $req->bindParam(':Email', $email);
            $req->bindParam(':Password', $password);
            $req->execute();

            $return = (object)['status' => 'ok'];


          return $return;
        }

        public function relog($ID, $hash)
        {
          $sql = 'SELECT * FROM users_online WHERE hash = :hash';
          $req = $this->connection->prepare($sql);
          $req->bindParam(':hash', $hash);
          $req->execute();
          $req->setFetchMode(PDO::FETCH_OBJ);
          $res= $req->fetch();

          $return = $res;
          return $res;
        }

        public function Logout($userToLogout)
        {
          $sql = 'SELECT ID FROM users WHERE Email = :Email';
          $req = $this->connection->prepare($sql);
          $req->bindParam(':Email', $userToLogout);
          $req->execute();
          $req->setFetchMode(PDO::FETCH_OBJ);
          $res= $req->fetch();

          $return = $res;

          echo $res->ID;
          $UserID = $res->ID;
          $sql = 'DELETE FROM users_online WHERE UserID = :UserID';
          $req = $this->connection->prepare($sql);
          $req->bindParam(':UserID', $UserID);
          $req->execute();

          return ;
        }

  }
 ?>
