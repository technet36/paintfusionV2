<?php

/*
 * code de retour:
 * 0-99 -> ok
 * 100-199 -> pb input values
 * 400-499 -> bad request api
 * 500-599 -> api down
 * */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:9000');

$api_key="f7b8a452-ec7b-48d0-9681-fcd97a0a4321";
$curl = 0;
//
$response = "failed";
function execute_request($url){
// DEBUT D'ENVOIE DE LA REQUETE
  $curl = curl_init();
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($curl, CURLOPT_HEADER, 0);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_URL, $url);
  $response = curl_exec($curl);
  $response = json_decode($response);
  if (isset($response->{"status"},$response->{"status"}->{"message"})){
    echo ('{"msg":"'.$response->{"status"}->{"message"}.'","code":'.$response->{"status"}->{"status_code"}.'}');
    die();
  }
  curl_close($curl);
  return $response;

};
function check_SQL ($param) {  //uncomplete
  return $param;
  //return ( check_SQL($param) && preg_match('/((\%3D)|(=))[^\n]*((\%27)|(\')|(\-\-)|(\%3B)|(;))/i' ,$param)) ? $param : false;
};  //uncomplete
function check_pseudo(){
  $pseudo = strtolower($_GET['pseudo']);
  return ( check_SQL($pseudo) && preg_match('/.{3,255}/',$pseudo)) ? $pseudo : false;
};  //uncomplete
function check_server(){
  $server= $_GET['server'];
  return ( check_SQL($server) && preg_match('/NA|EUNE|EUW|KR|LAN|LAS|BR|TR|RU|OCE/',$server)) ? $server : false;
};
function check_action(){
  $action= $_GET['action'];
  return ( check_SQL($action) && preg_match('/getRunesPages|getStats|getProfile|getProfileByPseudo|getLeague|getHistorique/',$action)) ? $action: false;
};
function check_idMatch () {
  $idMatch = $_GET['idMatch'];
  //The pattern is "one or more digit"
  return ( check_SQL($idMatch) && preg_match('/\d+/',$idMatch )) ? $idMatch : false  ;
};
function check_tournamentType () {
  $tournamentType = $_GET['tournamentType'];
  return ( check_SQL($tournamentType) && preg_match('/\d+/',$tournamentType )) ? $tournamentType : false;
};
function check_idTournament() {
  $idTournament = $_GET['idTournament'];
  return ( check_SQL($idTournament) && preg_match('/\d+/',$idTournament)) ? $idTournament : false;
};
function check_idRiotGame() {
  $idRiotGame = $_GET['idRiotGame'];
  return ( check_SQL($idRiotGame) && preg_match('/\d+/',$idRiotGame)) ? $idRiotGame : false;

};
function check_summonerId() {
  $summonerId = $_GET['summonerId'];
  return ( check_SQL($summonerId) && preg_match('/\d+/',$summonerId)) ? $summonerId : false;
};

function check_apiResponseCode(){};//TODO


// Complétez $url avec l'url cible (l'url de la page que vous voulez télécharger)
switch (check_action()){
  case "getProfile":
    $summonerId = check_summonerId();
    $server = check_server();
    if ($server && $summonerId ){
      $url="https://".$server.".api.pvp.net/api/lol/".$server."/v1.4/summoner/".$summonerId."?api_key=".$api_key;
    }
    else {
      echo (json_encode(array('code'=>0,'msg'=>'invalid values. summonerId and server are needed')));
      die();
    }
    $response = execute_request($url);
    if($response){
      $response = json_encode($response->{$summonerId});
      echo ('{"profil":'.$response.',"msg":"ok","code":0}');
    }else
      echo ('{"msg":"Unable to reach the api","code":2}');
    break;
  case "getProfileByPseudo":
    $pseudo = check_pseudo();
    $server = check_server();
    if ($server && $pseudo ){
      $url="https://".$server.".api.pvp.net/api/lol/".$server."/v1.4/summoner/by-name/".$pseudo."?api_key=".$api_key;
    }
    else {
      //header("location: ../error.php?error=".$e->getMessage());
      echo (json_encode(array('code'=>300,'msg'=>'invalid values. pseudo and server are needed','server'=>$server,'pseudo'=>$pseudo ,'location'=>'getting the profile by the pseudo')));
      die();
    }
    $response = execute_request($url);

    if($response){
      $response = json_encode($response->{$pseudo});
      echo ('{"profil":'.$response.',"msg":"ok","code":0}');
    }else
      echo ('{"msg":"Unable to reach the api","code":2}');

    break;
  case "getRunesPages":
    $server = check_server();
    $summonerId = check_summonerId();
    if ($server && $summonerId ){
      $url="https://".$server.".api.pvp.net/api/lol/".$server."/v1.4/summoner/".$summonerId."/runes?api_key=".$api_key;
    }
    else {
      //header("location: ../error.php?error=".$e->getMessage());
      echo (json_encode(array('code'=>1,'msg'=>'invalid values. summonerId and server are needed','location'=>'trying to get the runes pages')));
      die();
    }
    $response = execute_request($url);
    if($response){
      $response = json_encode($response->{$summonerId}->{"pages"});
      echo ('{"pages":'.$response.',"msg":"ok","code":0}');
    }else
      echo ('{"msg":"Unable to reach the api","code":2}');

    break;
  case "getLeague":
    $summonerId = check_summonerId();
    $server = check_server();
    if ($server && $summonerId ){
      $url="https://".$server.".api.pvp.net/api/lol/".$server."/v2.5/league/by-summoner/".$summonerId."/entry?api_key=".$api_key;
    }
    else {
      echo (json_encode(array('code'=>0,'msg'=>'invalid values. summonerId and server are needed')));
      die();
    }
    $response = execute_request($url);
    if($response){
      $response = json_encode($response->{$summonerId}[0]);
      //echo($response);
      echo ('{"stats":'.$response.',"msg":"ok","code":0}');
    }else
      echo ('{"msg":"Unable to reach the api","code":2}');
        break;
  case "getHistorique":
    $summonerId = check_summonerId();
    $server = check_server();
    if ($server && $summonerId ){
      $url="https://".$server.".api.pvp.net/api/lol/".$server."/v1.3/game/by-summoner/".$summonerId."/recent?api_key=".$api_key;
    }
    else {
      echo (json_encode(array('code'=>1,'msg'=>'invalid values. summonerId and server are needed')));
      die();
    }
    $response = execute_request($url);
    if($response){
      $response = json_encode($response);
      //echo($response);
      echo ('{"stats":'.$response.',"msg":"ok","code":0}');
    }else
      echo ('{"msg":"Unable to reach the api","code":2}');
        break;
  case "getStats":
    $idMatch = check_idMatch();
    $server = check_server();
    if ($server && $idMatch ){
      $url="https://".$server.".api.pvp.net/api/lol/".$server."/v2.2/match/".$idMatch."?api_key=".$api_key;
    }
    else {
      echo (json_encode(array('code'=>1,'msg'=>'invalid values. idMatch and server are needed')));
      die();
    }
    $response = execute_request($url);
    if($response){
      $response = json_encode($response);
      //echo($response);
      echo ('{"stats":'.$response.',"msg":"ok","code":0}');
    }else
      echo ('{"msg":"Unable to reach the api","code":2}');
    break;
  default:
    //header("location: ../error.php?error=".$e->getMessage());
    echo (json_encode(array('code'=>0,'msg'=>'failed api.php','action'=>check_action())));
    die();
    break;

}


//FIN D'ENVOIE
