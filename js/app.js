
var game;
$(document).ready(function(){
  game = new ConnectFour('Oleh','Stas');
  renderBoard();
});

function renderBoard(){
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
