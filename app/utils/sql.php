<?php

header('Access-Control-Allow-Origin: http://localhost:9000');
$BDD_host="localhost";
$BDD_user="root";
$BDD_password="admin";
$BDD_base="paintfusion";
try {
    $bdd = new PDO('mysql:host='.$BDD_host.';dbname='.$BDD_base,$BDD_user,$BDD_password,array(PDO::FETCH_NAMED, PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION));


} catch (PDOException $e) {
    header("location: ../error.php?error=".$e->getMessage());
    die("<font color=\"red\">SQLInsert: Erreur de connexion : " . $e->getMessage() . "</font>");
}



switch ($_GET["action"]){
  case "auth": // $_GET["server"] , $_GET["name"]
    $name=$_POST["name"];
    $lastName=$_POST["lastName"];
    $mail=$_POST["mail"];
    $login=$_POST["login"];
    $server=$_POST["server"];
    $summonerId=$_POST["summonerId"];
    $password=$_POST["pass"];
    $pass.="é(-è_%ù*µ^schbjoui¨?bgv,:!RTDJtf§1996";
    $password = hash("sha256",$password);


    $sql = "SELECT COUNT(*) as 'check' FROM `user_t` WHERE `summonerId`='$summonerId' AND `server`= '$server'";
    $res = $bdd->query($sql);
    $test= $res-> fetch();
    $test = $test['check'];

    if ($test == 0){
      $sql =  "INSERT INTO user_t (`pseudo`,`password`,`nom`,`prenom`,`email`,`server`,`summonerId`) VALUES ('$login','$password','$name','$lastName','$mail','$server','$summonerId')";
      $res = $bdd->query($sql);
      echo (1);
    }
    else echo (0);
    break;//To sign up
  case "mail":
        $server=$_POST["server"];
        $login=$_POST["login"];
        $dest=$_POST["dest"];

        $sql = "SELECT email, COUNT(*) as 'check' FROM `user_t` WHERE `pseudo`='$login' AND `server`= '$server'";
        $res = $bdd->query($sql);
        $test= $res-> fetch();
        if ($test['check'] == 1 && $dest==$test['email'] ){
            require '../PHPMailer-master/PHPMailerAutoload.php';

            $passwd = md5(rand(1000,9999));
            $mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp.gmail.com;';  // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 587;                                    // TCP port to connect to
            $mail->Username = 'morandmaxence@gmail.com';                 // SMTP username
            $mail->Password = 'technet36';                           // SMTP password

            $mail->setFrom('morandmaxence@gmail.com', 'Paintfusion');
            $mail->addAddress($dest, $login);     // Add a recipient
            $mail->addReplyTo('morandmaxence@gmail.com', 'Paintfusion');

            $mail->isHTML(true);                                  // Set email format to HTML

            $mail->Subject = 'Paintfusion';
            $mail->Body    = 'Password recovery system <br/>Hi summoner,<br/>It seems you\'ve forget the password of the Paintfusion\'s '.$login.' account.<br/><b>Your new password : '.$passwd.'</b><br/>Try not to forget it :)<br/>GLHF';
            $mail->AltBody = 'Password recovery system new password : '.$passwd;

            if(!$mail->send()) {
                echo 'Message could not be sent.';
                echo 'Mailer Error: ' . $mail->ErrorInfo;
            } else {
//TODO: faire la même encryption que pour le login de index.js
                $passwd.="é(-è_%ù*µ^schbjoui¨?bgv,:!RTDJtf§1996";
                $passwd = hash("sha256",$password);
                $sql = "UPDATE `user_t` SET  `password`=".$passwd." WHERE `pseudo`='$login' AND `server`= '$server'";
                $res = $bdd->query($sql);
                echo '12';
            }
            }
        elseif ($test['check']==0) echo ("10");//not registered
        elseif ( $dest!=$test['email']) echo ("11");//wrong email
        break;//To reset password
  case "login":
        $server=$_GET["server"];
        $login=$_GET["pseudo"];
        $password =$_GET["password"];
        $password.="é(-è_%ù*µ^schbjoui¨?bgv,:!RTDJtf§1996";
        $password = hash("sha256",$password);


        $sql = "SELECT `id_user`,`mat_gen`,`status`,`summonerId`,`privacy_lvl` FROM `user_t` WHERE `pseudo`='$login' AND `server`= '$server' AND `password`='$password'";
        $res = $bdd->query($sql);
        $user= $res-> fetch();

          header('Content-Type: application/json');
            echo (json_encode(array(
                'matrix'=>$user['mat_gen'],
                'status'=>$user['status'],
                'sumId'=>$user['summonerId'],
                'privacyLvl'=>$user['privacy_lvl']
              )
            ));
        break;//To log in
  case "signup":
    $server=$_GET["server"];
    $pseudo=$_GET["pseudo"];
    $password =$_GET["pass"];
    $password.="é(-è_%ù*µ^schbjoui¨?bgv,:!RTDJtf§1996";
    $password = hash("sha256",$password);
    $mail=$_GET["mail"];
    $sumId=$_GET["sumId"];
    $sql = 'INSERT INTO `paintfusion`.`user_t` (`pseudo`, `password`, `email`, `server`, `summonerId`) VALUES (\''.$pseudo.'\', \''.$password.'\',\''.$mail.'\',\''.$server.'\',\''.$sumId.'\')';

    $response = $bdd->query($sql);

    echo (true);
        break;
  case "userExist":
    $server=$_GET["server"];
    $pseudo=$_GET["pseudo"];
    $data = array();
    $sql = 'SELECT COUNT(*) AS \'exist\' FROM `paintfusion`.`user_t` WHERE pseudo=\''.$pseudo.'\' AND server=\''.$server.'\'';
    $res = $bdd->query($sql);
    header('Content-Type: application/json');

    $response= $res-> fetch();
    if (isset($response['exist']) && $response['exist'])
      echo (json_encode(array('exist'=>1)));
    else
      echo (json_encode(array('exist'=>0)));
      break;
    default:
        echo ("failed sql.php");
        break;

}

