var player1_result = 0;
var player2_result = 0;
var limit = 0;

function init() {
      document.getElementById("clicks_limit").innerHTML = limit;
      document.getElementById("player1_score").innerHTML = player1_result;
      document.getElementById("player2_score").innerHTML = player2_result;
      document.getElementById("quantity").value = 0;
}

function score_limit() {
  limit = document.getElementById("quantity").value;
  document.getElementById("clicks_limit").innerHTML = limit;
}

function player1() {
  if( player1_result < limit ) {
      player1_result = player1_result + 1;
  }
  document.getElementById("player1_score").innerHTML = player1_result;
  return;
}

function player2() {
  if( player2_result < limit ) {
      player2_result = player2_result + 1;
  }
  document.getElementById("player2_score").innerHTML = player2_result;
  return;
}

function reset() {
  player1_result = 0;
  player2_result = 0;
  limit = 0;
  init();
  return;
}
