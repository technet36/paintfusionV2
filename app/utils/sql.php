<?php

header('Access-Control-Allow-Origin: http://localhost:9000');
header('Content-Type: application/json');
$BDD_host="localhost";
$BDD_user="root";
$BDD_password="admin";
$BDD_base="paintfusion";
$sql=false;
try {
    $bdd = new PDO('mysql:host='.$BDD_host.';dbname='.$BDD_base,$BDD_user,$BDD_password,array(PDO::FETCH_NAMED, PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION));


} catch (PDOException $e) {
    header("location: ../error.php?error=".$e->getMessage());
    die("<font color=\"red\">SQLInsert: Erreur de connexion : " . $e->getMessage() . "</font>");
}
function check_SQL ($param) {  //uncomplete
  return ( check_SQL($param) && preg_match('/((\%3D)|(=))[^\n]*((\%27)|(\')|(\-\-)|(\%3B)|(;))/i' ,$param)) ? $param : false;
};  //uncomplete

//########################
//Verif of the right content type of the params
//just need to do maVar = check_maVar();
//to get maVar at the right value or false;
//########################
function check_idMatch () {
  $idMatch = $_GET['idMatch'];
  //The pattern is "one or more digit"
  return ( check_SQL($idMatch) && preg_match('/\d+/',$idMatch )) ? $idMatch : false  ;
};
function check_tournamentType () {
  $tournamentType = $_GET['tournamentType'];
  return ( check_SQL($tournamentType) && preg_match('/\d+/',$tournamentType )) ? $tournamentType : false;
};
function check_winnerToMatch() {
  $winnerToMatch = $_GET['winnerToMatch'];
  return ( check_SQL($winnerToMatch) && preg_match('/\d+/',$winnerToMatch)) ? $winnerToMatch : false;
};
function check_looserToMatch() {
  $looserToMatch = $_GET['looserToMatch'];
  return ( check_SQL($looserToMatch) && preg_match('/\d+/',$looserToMatch)) ? $looserToMatch : false;
};
function check_note() {
  $note = $_GET['note'];
  return ( check_SQL($note)? $note : false);
};  //uncomplete
function check_privacyLvl() {
  $privacyLvl = $_GET['privacyLvl'];
  return ( check_SQL($privacyLvl) && preg_match('/\d+/',$privacyLvl)) ? $privacyLvl : false;
};
function check_idTournament() {
  $idTournament = $_GET['idTournament'];
  return ( check_SQL($idTournament) && preg_match('/\d+/',$idTournament)) ? $idTournament : false;
};
function check_idRiotGame() {
  $idRiotGame = $_GET['idRiotGame'];
  return ( check_SQL($idRiotGame) && preg_match('/\d+/',$idRiotGame)) ? $idRiotGame : false;

};
function check_nomTeam() {
  $nomTeam = $_GET['nomTeam'];
  return ( check_SQL($nomTeam) && preg_match('/.{3,255}/',$nomTeam)) ? $nomTeam : false;
};  //uncomplete
function check_premade() {
  $premade = $_GET['premade'];
  return ( check_SQL($premade) && preg_match('/\d./',$premade)) ? $premade : false;
};
function check_points() {
  $points = $_GET['points'];
  return ( check_SQL($points) && preg_match('/\d+/',$points)) ? $points : false;
};
function check_group() {
  $group = $_GET['group'];
  return ( check_SQL($group) && preg_match('/\d+/',$group)) ? $group : false;
};
function check_tournamentName() {
  $tournamentName = $_GET['tournamentName'];
  return ( check_SQL($tournamentName) && preg_match('/.{3,255}/',$tournamentName)) ? $tournamentName : false;
};  //uncomplete
function check_state() {
  $state = $_GET['state'];
  return ( check_SQL($state) && preg_match('/\d+/',$state)) ? $state : false;
};
function check_host() {
  $host = $_GET['host'];
  return ( check_SQL($host) && preg_match('/.{3,255}/',$host)) ? $host: false;
};  //uncomplete
function check_maxPlayer() {
  $maxPlayer = $_GET['maxPlayer'];
  return ( check_SQL($maxPlayer) && preg_match('/\d+/',$maxPlayer)) ? $maxPlayer : false;
};
function check_map () {
  $map = $_GET['map'];
  //The pattern is "SUMMONERS_RIFT or TWISTED_TREELINE or HOWLING_ABYSS
  if ( check_SQL($map) && preg_match('/SUMMONERS_RIFT|TWISTED_TREELINE|HOWLING_ABYSS/',$map ))
    return true;
  else return false;
};
function check_date() {
$date = $_GET['date'];//need a timestamp
  return (date($date)) ? $date : false;
};
function check_registrationMaxDate() {
  $registrationMaxDate = $_GET['registrationMaxDate'];
  return (date($registrationMaxDate)) ? $registrationMaxDate : false;
};
function check_idRiotTournament() {
  $idRiotTournament = $_GET['idRiotTournament'];
  return ( check_SQL($idRiotTournament) && preg_match('/\d+/',$idRiotTournament)) ? $idRiotTournament : false;
};
function check_idUser() {
  $idUser = $_GET['idUser'];
  return ( check_SQL($idUser) && preg_match('/\d+/',$idUser)) ? $idUser : false;
};
function check_pseudo(){
  $pseudo = $_GET['pseudo'];
  return ( check_SQL($pseudo) && preg_match('/.{3,255}/',$pseudo)) ? $pseudo : false;
};  //uncomplete
function check_password(){
  $password= $_GET['password'];
  return ( check_SQL($password) && preg_match('/.{3,255}/',$password)) ? $password : false;
};  //uncomplete
function check_server(){
  $server= $_GET['server'];
  return ( check_SQL($server) && preg_match('/NA|EUNE|EUW|LAN|LAS|BR|TR|RU|OCE/',$server)) ? $server : false;
};
function check_matGen(){
  $matGen= $_GET['matGen'];
  return ( check_SQL($matGen)) ? $matGen: false;
};  //uncomplete
function check_status(){
  $status= $_GET['status'];
  return ( check_SQL($status) && preg_match('/\d{,5}/',$status)) ? $status: false;
};
function check_summonerId() {
  $summonerId = $_GET['summonerId'];
  return ( check_SQL($summonerId) && preg_match('/\d+/',$summonerId)) ? $summonerId : false;
};
function check_email(){

$mail = $_GET['mail'];//the pattern is "any letter or number followed by @ followed by any letter or number
//followed by . followed by 2-4 letters and maybe another . (for tlds like co.uk)

  if ( check_SQL($mail) && preg_match('/^[A-z0-9_\-]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z.]{2,4}$/', $mail))
    return true;
  else return false;
};
function check_action(){
  $action= $_GET['action'];
  return ( check_SQL($action) && preg_match('/login|signup|userExist|userProfile/',$action)) ? $action: false;
};
//########################
function encrypt_password ($pass) {
  $pass.="é(-è_%ù*µ^schbjoui¨?bgv,:!RTDJtf§1996";
  return hash("sha256",$pass);
}


switch (check_action()){
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
    $server= check_server();
    $pseudo= check_pseudo();
    $password= check_password();
    if ($server && $pseudo && $password){
      $password= encrypt_password($password);
      $sql = "SELECT `id_user`,`mat_gen`,`status`,`summonerId`,`privacy_lvl` FROM `user_t` WHERE `pseudo`='$pseudo' AND `server`= '$server' AND `password`='$password'";
    }
    else {
      header("location: ../error.php?error=".$e->getMessage());
      echo (json_encode(array('code'=>0,'msg'=>'invalid values. pseudo, password and server are needed')));
      die();
    }

        $res = $bdd->query($sql);
        $user= $res-> fetch();

            echo (json_encode(array(
                'code'=> 1,
                'msg'=> 'login done',
                'matrix'=>$user['mat_gen'],
                'status'=>$user['status'],
                'sumId'=>$user['summonerId'],
                'privacyLvl'=>$user['privacy_lvl']
              )
            ));
        break;//To log in
  case "signup":
    $mail =check_email();
    $sumId=check_summonerId();
    $server= check_server();
    $pseudo= check_pseudo();
    $password= check_password();
    if ($server && $pseudo && $password && $sumId){
      $password= encrypt_password($password);
      $sql = 'INSERT INTO `paintfusion`.`user_t` (`pseudo`, `password`, `email`, `server`, `summonerId`) VALUES (\''.$pseudo.'\', \''.$password.'\',\''.$mail.'\',\''.$server.'\',\''.$sumId.'\')';
    }
    else {
      header("location: ../error.php?error=".$e->getMessage());
      echo (json_encode(array('code'=>0,'msg'=>'invalid values. pseudo, password, summonerId and server are needed')));
      die();
    }


    $response = $bdd->query($sql);

    echo (json_encode(array('code'=>1,'msg'=>'Registration done')));


    break;//To register
  case "userExist":
    $server= check_server();
    $pseudo= check_pseudo();
    $summonerId = check_summonerId();
    if ($server && $pseudo){
      $sql = 'SELECT COUNT(*) AS `exist` FROM `paintfusion`.`user_t` WHERE pseudo=\''.$pseudo.'\' AND server=\''.$server.'\'';
    }
    elseif ($server && $summonerId) {
      $sql = 'SELECT COUNT(*) AS `exist` FROM `paintfusion`.`user_t` WHERE summonerId=\''.$summonerId.'\' AND server=\''.$server.'\'';
    }
    else {
      header("location: ../error.php?error=".$e->getMessage());
      echo (json_encode(array('code'=>0,'msg'=>'invalid values, pseudo and/or summonerId and server are needed')));
      die();
    }
    $res = $bdd->query($sql);

    $response= $res-> fetch();
    if (isset($response['exist']) && $response['exist']==1)
      echo (json_encode(array('code'=>1,'msg'=>'the user exist')));
    else
      echo (json_encode(array('code'=>0,'msg'=>'no account for this user (or several)')));
      break;
  case "userProfile":

    $server= check_server();
    $pseudo= check_pseudo();
    $summonerId = check_summonerId();
    if ($server && $pseudo){
      $sql = 'SELECT COUNT(*) AS `nb`,id_user,pseudo,email,server,mat_gen, note, stauts, privacy_lvl, summonerId FROM `paintfusion`.`user_t` WHERE pseudo=\''.$pseudo.'\' AND server=\''.$server.'\'';
    }
    elseif ($server && $summonerId) {
      $sql = 'SELECT id_user,pseudo,email,server,mat_gen, note, stauts, privacy_lvl, summonerId FROM `paintfusion`.`user_t` WHERE summonerId=\''.$summonerId.'\' AND server=\''.$server.'\'';
    }
    else {
      header("location: ../error.php?error=".$e->getMessage());
      echo (json_encode(array('exist'=>0,'msg'=>'invalid values, pseudo and/or summonerId and server are needed')));
      die();
    }
    $res = $bdd->query($sql);

    $response= $res-> fetch();
    if (isset($response['pseudo']) && $response['pseudo'] && $response['nb']==1)
      echo (json_encode(array('code'=>1,'msg'=>'the user exist')).json_encode($response));
    else
      echo (json_encode(array('code'=>0,'msg'=>'no account for this user (or several)')));
    break;
        break;
    default:
        echo (json_encode(array('code'=>0,'msg'=>'failed sql.php')));
        break;

}

