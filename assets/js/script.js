/**
 * create game variables
 */
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
}

/**
 * create const variables to play the game
 */
const playGame = () => {
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorButton = document.querySelector('.scissors');
    const playerOptions = [rockButton, paperButton, scissorButton];
    const computerOptions = ['rock', 'paper', 'scissors'];

/** 
 * Function to start play
 */ 
playerOptions.forEach(option => {
    option.addEventListener('click', function() {

    const movesLeft = document.querySelector('.movesLeft'); moves++;
    movesLeft.innerText = `Moves Left: ${10-moves}`;
    
      const choiceNumber = Math.floor(Math.random()*3);
      const computerChoice = computerOptions[choiceNumber];

/** 
 * Function to see who wins
 */
winner(this.innerText, computerChoice);

/** 
 *  Function to end game after 10 moves
*/
if(moves === 10) {
    gameOver(playerOptions, movesLeft);
  }
});
});
};

/** 
 * Function to decide the winner
 */ 
const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
      player = player.toLowerCase();
      computer = computer.toLowerCase();
      
      if (player === computer) {
        result.textContent = 'Tie';
        } else if (player == 'rock') {
          if (computer == 'paper'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
          } else {
              result.textContent = 'Player Win!';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      } else if (player == 'scissors') {
          if (computer == 'rock'){
              result.textContent = 'Computer Win!';
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          } else {
              result.textContent = 'Player Win!';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      } else if (player == 'paper'){
          if (computer == 'scissors'){
              result.textContent = 'Computer Win!';
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          } else {
              result.textContent = 'Player Win!';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
  };
  /**
   * Function to run when game is over
   */ 
  const gameOver = (playerOptions, movesLeft) => {

    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadButton = document.querySelector('.reload');

    playerOptions.forEach(option => {
        option.style.display = 'none';
      });

      chooseMove.innerText = 'Game over!';
      movesLeft.style.display = 'none';

      if (playerScore > computerScore) {
        result.style.fontSize = '3rem';
        result.innerText = 'Congratulations! You won!';
        result.style.color = '#5D9138';
      } else if (playerScore < computerScore) {
        result.style.fontSize = '3rem';
        result.innerText = 'You lost the game!';
        result.style.color = '#B13636';
      } else {
        result.style.fontSize = '3rem';
        result.innerText = 'Tie';
        result.style.color = '#6B787C';
      }
        reloadButton.innerText = 'Restart';
        reloadButton.style.display = 'flex';
        reloadButton.addEventListener('click', () => {
          window.location.reload();
      });
  };
  /**
   * Calling playGame function
   */ 
  playGame();

  // Calling game function
  game();

