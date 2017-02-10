
var game;
$(document).ready(function(){
  $('#start-btn').click(function(e){
    e.preventDefault();
    var player1 = $('#input-pl-1').val();//Get pl1 name
    var player2 = $('#input-pl-2').val();//Get pl2 name

    game = new ConnectFour(player1 , player2);//Create new game
    updateCurrentPlayer();

    //Show playing board:
    $('#player-turn').fadeIn(1000);
    $('.game-board').fadeIn(1000);
    $('#player-form').slideUp(500);
  });

  //play
  $('.col').click(function(){
    var colN = $(this).attr('id');
    colN = parseInt(colN[colN.length-1]);//get columnNumber
    game.playChecker(colN);
    renderBoard();
    updateCurrentPlayer();
  });
});

function renderBoard(){ //Show all checkers on DOM
  game.board.forEach(function(row,i){
    row.forEach(function(slot,j){

      var cellHtml = '.pos'+i+j;
      if(slot === 1 ){
        $(cellHtml).addClass('red');
      }else if(slot === 2){
        $(cellHtml).addClass('black');
      }else{
        //empty
      }
    });
  });
}

function updateCurrentPlayer(){ //Update player turn on DOM
  $('#player').html(game.currentPlayer);
  if(game.currentPlayer === game.player1){
    $('#player').parent().removeClass('player-2');
    $('#player').parent().addClass('player-1');
  }else{
    $('#player').parent().removeClass('player-1');
    $('#player').parent().addClass('player-2');
  }
}
