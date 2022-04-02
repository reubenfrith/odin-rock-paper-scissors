
// computerplay f() that returns randomly either rock, paper or scissors

function computerplay() {
    // Create array containing rock, paper and scissors
    const choice = ["rock", "paper", "scissors"];

    // randomly select index from array (Math.random() outputs random number between 0 and 1) multiply by length of array and round to lowest whole number to get randomElement.
    let randomElement = choice[Math.floor(Math.random() * choice.length)];

    // return random selection this is the computerplay choice for a round of rock paper scissors
    return randomElement;

}


function playRound(playerSelection, computerSelection) {

    let playerSelection = prompt("Enter your choice for a game of rock - paper - scissors ?");
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection != 'rock' || playerSelection != 'paper' || playerSelection != 'scissors') {
        return alert('Invalid Choice, enter rock, paper or scissors');
    }

    let computerSelection = computerplay();

    // Play Game of Rock Paper Scissors, comp vs user
    // return winner of game
    // Comp = User -> Draw
    if (computerSelection == playerSelection) {
        return [0, "Draw, even stevens"];
    }
    // Comp = P + User = R -> Comp wins
    else if (computerSelection = 'paper' && playerSelection == 'rock') {
        return ["c", "You lose, paper beats rock!"]
    }
    // Comp = S + User = R -> User wins
    else if (computerSelection = 'scissors' && playerSelection == 'rock') {
        return ["u", "You win, keep it up!"]
    }
    // Comp = R + User = P -> User wins
    else if (computerSelection = 'rock' && playerSelection == 'paper') {
        return ["u", "You win, champion in the making!"]
    }
    // Comp = S + User = P -> Comp wins
    else if (computerSelection = 'scissors' && playerSelection == 'paper') {
        return ["c", "You lose, ohh no!"]
    }
    // Comp = R + User = S -> Comp wins
    else if (computerSelection = 'rock' && playerSelection == 'scissors') {
        return ["c", "You lose, damn son!"]
    }
    // Comp = P + User = S -> Comp wins
    else if (computerSelection = 'paper' && playerSelection == 'scissors') {
        return ["u", "You win, ayyyoooo!"]
    }
    
}

