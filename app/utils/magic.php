<?php



//levelTab: each division is worth 20 more than the previous start at 0->B5
/*
 * 0->B5
 * 20->B4
 * 40->B3
 * 60->B2
 * 80->B1
 *  100->S5
 *  120->S4
 *  140->S3
 *  160->S2
 *  180->S1
 * 200->G5
 * 220->G4
 * 240->G3
 * 260->G2
 * 280->G1
 *  300->P5
 *  320->P4
 *  340->P3
 *  360->P2
 *  380->P1
 * 400->D5
 * 420->D4
 * 440->D3
 * 460->D2
 * 500->D1
 *  600->M
 * 700->C
 */



header('Access-Control-Allow-Origin: http://localhost:9000');
header('Content-Type: application/json');
$BDD_host="localhost";
$BDD_user=isset($_SESSION["status"]) ? $_SESSION["credential"] :"player";
$BDD_password= isset($_SESSION["status"]) ? $_SESSION["pass"] : "XFcH4MFdJYhrp47R";
$BDD_base="paintfusion";
$sql=false;
try {
  $bdd = new PDO('mysql:host='.$BDD_host.';dbname='.$BDD_base,$BDD_user,$BDD_password,
    array(  PDO::FETCH_NAMED,
      PDO::ATTR_TIMEOUT => 1,
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));


} catch (PDOException $e) {
  header("location: ../error.php?error=".$e->getMessage());
  echo (json_encode(array('code'=>200,'msg'=>'problem from the BDD connection')));
  die();
}
function check_SQL ($param) {  //uncomplete
  return $param;
  //return ( check_SQL($param) && preg_match('/((\%3D)|(=))[^\n]*((\%27)|(\')|(\-\-)|(\%3B)|(;))/i' ,$param)) ? $param : false;
};  //uncomplete


function check_idTournament() {
  $idTournament = $_GET['idTournament'];
  return ( check_SQL($idTournament) && preg_match('/\d+/',$idTournament)) ? $idTournament : false;
};
function check_postWeight() {
  $idTournament = $_GET['idTournament'];
  return ( check_SQL($idTournament) && preg_match('/[0,1,2,3,4,5]/',$idTournament)) ? $idTournament : false;
};
/*
 *if (solo team)
 * id_tournament
 * post_weith {no,howIFit2,2awai,absolute2,absolute1)
 * bool premade
 *
 * update team_t
 * update team_to_tournament
 * update team_to_user
 * update match_t
 * update match_to_team
 *
 *elseif (premade tournament)
 * id_tournament
 * bool premade
 *
 * update match_t
 * update match_to_team
 *
 * */


//********************
//get the tournament caracteristiques

$tournamentId = check_idTournament();
if(!$tournamentId){
  echo (json_encode(array('code'=>101,'msg'=>'invalid values, idTournament is needed','idTournament'=>$tournamentId)));
  die();
}
$bdd->beginTransaction();
$outPut = array();

$getTournament = $bdd->prepare("SELECT tournament_type, premade, team_size FROM tournament_t WHERE id_tournament = :idT");
$getTournament->bindParam(":idT",$tournamentId);

$res=$getTournament->execute();
if ($res && $response= $getTournament-> fetch(PDO::FETCH_ASSOC)){
//$response = (tournament_type:0, premade:0, map:'SUMMONER_RIFT', game_size:5);
  $tournament_type = $response['tournament_type'];
  $premade= $response['premade'];
  $team_size = $response['team_size'];
  array_push($outPut,array('code'=>0,'msg'=>'collecting dust from mount Targon','data'=>$response));
}
else {
  $bdd->rollBack();
  array_push($outPut,array('code'=>100,'msg'=>'no tournament for this id','idTournament'=>$tournamentId));
  die(json_encode($outPut));
}



//############ now $tournament_type, $premade, $team_size are available

//***********************
// get the tab of participant from id_tournament

if($premade==0){


  $getParticipants = $bdd->prepare("SELECT id_user, post_pref1,post_pref2,player_lvl FROM `tournament_to_user` WHERE `id_tournament` = :idT ORDER BY ID ASC");
  $getParticipants->bindParam(":idT",$tournamentId);
  $res=$getParticipants->execute();
  $participantsTab = array();
  if ($res){
    while($row= $getParticipants-> fetch(PDO::FETCH_ASSOC)){
      array_push($participantsTab,$row);
    }
    $nbPlayer = count($participantsTab);
    if ($nbPlayer<($team_size*2)) {
      $bdd->rollBack();
      array_push($outPut,array('code'=>100,'msg'=>'Not enough participants','data'=>$participantsTab));
      die(json_encode($outPut));
    }
    array_push($outPut,array('code'=>0,'msg'=>'getting Freljord ice'));
  }
  else {
    $bdd->rollBack();
    array_push($outPut,array('code'=>100,'msg'=>'no participant for this tournament','idTournament'=>$tournamentId));
    die(json_encode($outPut));
  }


//######## now $participantsTab is available and sorted registration date (first is first)

  //sort $participantsTab
  //***********************
//create team in team_t
  $nbTeam = $nbPlayer/$team_size;
  if (!is_integer($nbTeam)){
    $nbTeam = round($nbTeam,0,PHP_ROUND_HALF_DOWN);
    for($nbPlayer;$nbPlayer>($nbTeam*$team_size);$nbPlayer--){
      array_push($outPut,array('code'=>1,'msg'=>'warning: user deleted','data'=>$participantsTab[$nbPlayer-1]['id_user']));
      unset ($participantsTab[$nbPlayer-1]);
    }
    array_push($outPut,array('code'=>0,'msg'=>'filtering Shurima sand','data'=>$participantsTab));
  }






//***********************
//assign team with team_to_user





}




//************************
//create matches in match_t




//***********************
//update match_to_team



echo(json_encode($outPut));
