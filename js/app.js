
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
    if(!game.gameOver){
      var columnIndex = $(this).attr('id');
      columnIndex = parseInt(columnIndex[columnIndex.length-1]);//get columnIndex
      game.playChecker(columnIndex);
      renderBoard();
      isGameOver();
      updateCurrentPlayer();
    }
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

  if(game.isGameOver){
    return;
  }

  $('#player').html(game.currentPlayer);
  if(game.currentPlayer === game.player1){
    $('#player').parent().removeClass('player-2');
    $('#player').parent().addClass('player-1');
  }else{
    $('#player').parent().removeClass('player-1');
    $('#player').parent().addClass('player-2');
  }
}

function isGameOver(){
  if (game.gameOver){
    $('#player-turn').addClass('player-turn-win');
    if(game.winner === 1 ){
      $('#player-turn').html(game.player1 + ' WINNER!');
    }else{
      $('#player-turn').html(game.player2 + ' WINNER!');

    }

    console.log(game.winner);
    for(var i = 0 ; i < 4; i++){
      var posRow = game.winningCombination[i].i;
      var posCol = game.winningCombination[i].j;
      $('.pos' + posRow + posCol).addClass('winner-cell');
      setTimeout(function(){
        $('.pos' + posRow + posCol).addClass('winner-cell');
      },200*i);
    }
  }
}
