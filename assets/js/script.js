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
 *  Function to end game efter 10 moves
*/
if(moves === 10) {
    gameOver(playerOptions, movesLeft);
  }
});
});
};




