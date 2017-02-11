function ConnectFour(player1Name, player2Name){
  this.board = [
    //0    1    2    3    4    5    6
    [null,null,null,null,null,null,null],//0
    [null,null,null,null,null,null,null],//1
    [null,null,null,null,null,null,null],//2
    [null,null,null,null,null,null,null],//3
    [null,null,null,null,null,null,null],//4
    [null,null,null,null,null,null,null],//5
  ];
  this.player1 = player1Name;
  this.player2 = player2Name;
  this.gameOver = false;
  this.winner = null;

  //Random player for first turn:
  if(Math.random()<0.5){
    this.currentPlayer = this.player1;
  }else{
    this.currentPlayer = this.player2;
  }
}

ConnectFour.prototype.playChecker = function(columnNumber){
  for(var i = this.board.length - 1; i >= 0 ; i--){
    if(this.board[i][columnNumber] === null){
      if(this.currentPlayer === this.player1){
        this.board[i][columnNumber] = 1;//Player's 1 turn
        this.checkIfWin();
        this.toogleCurrentPlayer();
        return true;
      }else{
        this.board[i][columnNumber] = 2;//Player's 2 turn
        this.checkIfWin();
        this.toogleCurrentPlayer();
        return true;
      }
    }
  }
  console.log('No more space in column');
  return false;
};

ConnectFour.prototype.toogleCurrentPlayer = function(){
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2;
  }else{
    this.currentPlayer = this.player1;
  }
};

ConnectFour.prototype.checkIfWin = function(){
  var i,j,val;
  //Check diagonal down-right
  for( i = 0 ; i<3 ; i++){
    for( j = 0 ; j<4 ; j++){
      val = this.board[i][j];
      if (val !== null && val === this.board[i+1][j+1] && val === this.board[i+2][j+2] && val === this.board[i+3][j+3]) {
        this.win(val,
          [i,j],
          [i+1,j+1],
          [i+2,j+2],
          [i+3,j+3]);
      }
    }
  }
  //Check diagonal down-left
  for( i = 0 ; i<3 ; i++){
    for( j = 6 ; j>2 ; j--){
      val = this.board[i][j];
      if (val !== null && val === this.board[i+1][j-1] && val === this.board[i+2][j-2] && val === this.board[i+3][j-3]) {
        this.win(val,
          [i,j],
          [i+1,j-1],
          [i+2,j-2],
          [i+3,j-3]);
      }
    }
  }

  //Check horizontal
  for(i =0 ; i < 6; i++){
    for(j = 0; j< 4; j++){
      val = this.board[i][j];
      if (val !== null && val === this.board[i][j+1] && val === this.board[i][j+2] && val === this.board[i][j+3]){
        this.win(val,
          [i,j],
          [i,j+1],
          [i,j+2],
          [i,j+3]);
      }
    }
  }

  //Check vertical
  for(i =0 ; i < 3; i++){
    for(j = 0; j< 7; j++){
      val = this.board[i][j];
      if (val !== null && val === this.board[i+1][j] && val === this.board[i+2][j] && val === this.board[i+3][j]){
        this.win(val,
          [i,j],
          [i+1,j],
          [i+2,j],
          [i+3,j]);
      }
    }
  }
};

ConnectFour.prototype.win = function(winner,elem1, elem2 ,elem3, elem4){

  this.winner = winner;
  this.gameOver = true;
  //position of winning combination:
  this.winningCombination = [
    { i : elem1[0] , j : elem1[1]},
    { i : elem2[0] , j : elem2[1]},
    { i : elem3[0] , j : elem3[1]},
    { i : elem4[0] , j : elem4[1]},
  ];
};
