var userHP = 100;
var opHP = 100;
opAttacks = [flameThrower, dragonClaw, ember, growl];
playerMove = 0;
/* users moves */
function waterCannon() {
  if(playerMove == 0 && userHP != 0) {
    var miss = Math.floor((Math.random() * 10) + 1); // miss rate
    if(miss == 1) {
      document.getElementById('message').innerHTML = " Wartotle's attack missed! ";
    }
    else {
      document.getElementById('message').innerHTML = " Wartotle used water cannon "; // attack
      var critical = Math.floor((Math.random() * 10) + 1); // critical
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 30; // yes critical
        }
      }
      else{
        opHP = opHP - 30; // no critical
      }
      if(opHP < 0){ opHP = 0} //faint
        document.getElementById('apHP').innerHTML = opHP; // update hp
      if(opHP == 0){
        document.getElementById('message').innerHTML = " Charmeleon fainted! " // update message
      }
    }
    //wait();
    playerMove = 1; // update player move
}
}

function waterPulse() {
  if(playerMove == 0 && userHP != 0) {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Wartotle's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Wartotle used water pulse ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 20;
        }
      }
      else{
        opHP = opHP - 20;
      }
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    //document.getElementById('message').innerHTML = " Charmeleon2 "
    if(opHP == 0){
      document.getElementById('message').innerHTML = " Charmeleon fainted! "
    }
  }
  //wait();
  playerMove = 1;
}
}

function surf() {
  if(playerMove == 0 && userHP != 0) {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Wartotle's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Wartotle used surf ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 10;
        }
      }
      else{
        opHP = opHP - 10;
      }
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    if(opHP == 0){
      document.getElementById('message').innerHTML = " Charmeleon fainted! "
    }
  }
  //wait();
  playerMove = 1;
}
}
function tackle() {
  if(playerMove == 0 && userHP != 0) {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Wartotle's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Wartotle used tackle ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 5;
        }
      }
      else{
        opHP = opHP - 5;
      }
    if(opHP < 0){ opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
  //document.getElementById('message').innerHTML = " Charmeleon4 "
    if(opHP == 0){
      document.getElementById('message').innerHTML = " Charmeleon fainted! "
    }
  }
  //wait();
  playerMove = 1;
}
}



/* opponent's moves */

function flameThrower() {
  var miss = Math.floor((Math.random() * 10) + 1); // miss rate
  if(miss == 1 ) {
  document.getElementById('message').innerHTML = " Charmeleon's attack missed! " // attack missed
  }
  else {
  document.getElementById('message').innerHTML = " Charmeleon used flame thrower " // attack
    var critical = Math.floor((Math.random() * 10) + 1); // critical
      if(critical == 4){
        for(var x = 0; x < 2; x++){ // yes critical
          userHP = userHP - 30;
        }
      }
      else{
        userHP = userHP - 30; // no critical
      }
  if(userHP < 0) { userHP = 0} // faint
  document.getElementById('myHP').innerHTML = userHP; // update hp
    if(userHP == 0) { // fainted
      document.getElementById('message').innerHTML = " Wartotle fainted! " // fainted
    }
  }
}

function dragonClaw() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Charmeleon's attack missed! "
  }
  else {
  document.getElementById('message').innerHTML = " Charmeleon used dragon claw "
  var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - 20;
      }
    }
    else{
      userHP = userHP - 20;
    }
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Wartotle fainted! "
    }
  }
}

function ember() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Charmeleon's attack missed! "
  }
  else {
  document.getElementById('message').innerHTML = " Charmeleon used ember "
  var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - 10;
      }
    }
    else{
      userHP = userHP - 10;
    }
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Wartotle fainted! "
    }
  }
}

function growl() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Charmeleon's attack missed! "
  }
  else {
  document.getElementById('message').innerHTML = " Charmeleon used growl "
  var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - 5;
      }
    }
    else{
      userHP = userHP - 5;
    }
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Wartotle fainted! "
    }
  }
}



function compPokemon() { // continue
  if(playerMove == 1 && opHP != 0) { // whos move
  var move = Math.floor((Math.random() * 4) + 1); // choose move randomly
    opAttacks[move](); // call attack from array
    playerMove = 0; // update player move
  }
}