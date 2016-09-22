<?php

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

    public function login($email, $password)
    {
      $sql = 'SELECT * FROM users WHERE Email = :Email';
      $req = $this->connection->prepare($sql);
      $req->bindParam(':Email', $email);
      $req->execute();
      $req->setFetchMode(PDO::FETCH_OBJ);
      $res= $req->fetch();

      $return = $res;

      if (!password_verify($password, $res->Password)) {
        $return = 'Wrong pass';
      }

        return $return;
    }

  }
 ?>
