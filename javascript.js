// load game function when page loads
document.onload = game()

// Restart button function, reloads index.html
const restartButton = document.querySelector('.restart');

const restartGame = () => {
    window.location.href= './index.html';
}
restartButton.addEventListener('click', restartGame);

// computerPlay() that returns randomly either rock, paper or scissors
function computerPlay() {
    // Create array containing rock, paper and scissors
    const choice = ["rock", "paper", "scissors"];

    // randomly select index from array (Math.random() outputs random number between 0 and 1) multiply by length of array and round to lowest whole number to get randomElement.
    let randomElement = choice[Math.floor(Math.random() * choice.length)];

    // return random selection this is the computerplay choice for a round of rock paper scissors
    return randomElement;

}

// playRound(playerSelection, computerSelection) plays 1 round of rock paper scissors using user input and random generated computer choice
function playRound(playerSelection, computerSelection) {

    // Play Game of Rock Paper Scissors, comp vs user
    // return winner of game
    // Comp = User -> Draw
    if (computerSelection == playerSelection) {
        return ["draw", "Draw, even stevens"];
    }
    // Comp = P + User = R -> Comp wins
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return ["c", "You lose, paper beats rock!"];
    }
    // Comp = S + User = R -> User wins
    else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        return ["u", "You win, keep it up!"];
    }
    // Comp = R + User = P -> User wins
    else if (computerSelection == 'rock' && playerSelection == 'paper') {
        return ["u", "You win, champion in the making!"];
    }
    // Comp = S + User = P -> Comp wins
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return ["c", "You lose, ohh no!"];
    }
    // Comp = R + User = S -> Comp wins
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return ["c", "You lose, damn son!"];
    }
    // Comp = P + User = S -> Comp wins
    else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        return ["u", "You win, ayyyoooo!"];
    }
    
}

function game() {

    // find the rock, paper, scissors buttons, the results and scoring
    const btns = document.getElementsByClassName('playerOption');
    const roundResult = document.querySelector('.results');
    const yourScore = document.querySelector('.yourscore');
    const computerScore = document.querySelector('.computerscore');
    

    // track scores
    let playerCounter = 0;
    let computerCounter = 0;
    

        for(var i=0; i<btns.length; i++){
            btns[i].addEventListener("click", function() {
                
                // button pressed is the players choice, Computer choices randomly
                let playerSelection = this.id;
                let computerSelection = computerPlay();

                let round = playRound(playerSelection, computerSelection);
                
                // increment score for winner by 1, if winner is chosen (i.e. score = 5 or greater) load winning or loosing page
                if (round[0] == "u") {
                    playerCounter ++;
                    if (playerCounter >= 5) {
                        window.location.href= './win.html';
                    }
                }
                else if (round[0] == "c") {
                    computerCounter ++;
                    if (computerCounter >= 5) {
                        window.location.href= './lose.html';
                    }
                }

                // update text shown for the came
                roundResult.textContent = round[1];
                yourScore.textContent = playerCounter;
                computerScore.textContent = computerCounter;          

            })

        }
    
}