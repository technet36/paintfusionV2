<?php

$api_key="f7b8a452-ec7b-48d0-9681-fcd97a0a4321";
$curl = 0;
$response = "failed";

function check_pseudo(){
  $pseudo = $_GET['pseudo'];
  return ( check_SQL($pseudo) && preg_match('/.{3,255}/',$pseudo)) ? $pseudo : false;
};  //uncomplete
function check_server(){
  $server= $_GET['server'];
  return ( check_SQL($server) && preg_match('/NA|EUNE|EUW|LAN|LAS|BR|TR|RU|OCE/',$server)) ? $server : false;
};
function check_action(){
  $action= $_GET['action'];
  return ( check_SQL($action) && preg_match('/getRunesPages|userProfile/',$action)) ? $action: false;
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

// Complétez $url avec l'url cible (l'url de la page que vous voulez télécharger)
switch (check_action()){
    case "userProfile":
      $pseudo = check_pseudo();
      $server = check_server();
      if ($server && $pseudo ){
        $url="https://".$server.".api.pvp.net/api/lol/euw/v1.4/summoner/by-name/".$pseudo."?api_key=".$api_key;
      }
      else {
        header("location: ../error.php?error=".$e->getMessage());
        echo (json_encode(array('code'=>0,'msg'=>'invalid values. pseudo and server are needed')));
        die();
      }
        //$url = urlencode($url);
      //echo $url;

      break;
    case "getRunesPages": //$_GET["server"] , $_GET["id"]
      $server = check_server();
      $summonerId = check_summonerId();
      if ($server && $pseudo ){
        $url="https://".$server.".api.pvp.net/api/lol/euw/v1.4/summoner/".$summonerId."/runes?api_key=".$api_key;
      }
      else {
        header("location: ../error.php?error=".$e->getMessage());
        echo (json_encode(array('code'=>0,'msg'=>'invalid values. summonerId and server are needed')));
        die();
      }
        break;
}
// DEBUT D'ENVOIE DE LA REQUETE
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HEADER, 0);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);
//FIN D'ENVOIE

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:9000');
echo $response;

