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
        this.toogleCurrentPlayer();
        return true;
      }else{
        this.board[i][columnNumber] = 2;//Player's 2 turn
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
