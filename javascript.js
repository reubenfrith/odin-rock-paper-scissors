
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

window.onload = game()

// game() plays 5 rounds of rock paper scissors with user and computer
function game() {

    // setup counters to track scores for 5 rounds
   // let playerCounter = 0;
   // let computerCounter = 0;

    

    // Play first to 5 rock paper scissors
   // while (playerCounter < 5 && computerCounter < 5) {

        // ask user to enter rock, paper or scissors
        let playerSelection;

       
        const btns = document.querySelector('.playerOption');

       
        btns.forEach(btn => btn.onclick = () =>  btn.id);
        
       console.log(playerSelection);
       // playerSelection = playerSelection.toLowerCase();


        // if user entered invalid input then force them to enter correct value for playerSelection
       // while (!(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors')) {
            //alert("Invalid input");
           // playerSelection = prompt("Enter your choice of rock, paper or scissors?");
           // playerSelection = playerSelection.toLowerCase();
        //} 

        //let computerSelection = computerPlay();


        // play one round of rock paper scissors
        //let round = playRound( playerSelection, computerSelection);


        // track results of each round by incrementing counter by 1
       // if (round[0] == "u") {
      //      playerCounter ++;
      //  }
     //  else if (round[0] == "c") {
     //      computerCounter ++;
     //  }

        // return result for that round
        
        return playerSelection
    }

    // Return the final results after playing 5 rounds, did you lose or win?
   // if (playerCounter > computerCounter) {
 //       return 0//window.location.href= './result.html'
  //  } else if (computerCounter > playerCounter) {
  //      return 'Loser'
 //   }
  //  else {
  //      return "Draw"
  //  }
    
//}


// Restart button function, reloads index.html
const restartButton = document.querySelector('.restart');

const restartGame = () => {
    window.location.href= './index.html';
}

restartButton.addEventListener('click', restartGame)