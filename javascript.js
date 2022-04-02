
// computerplay f() that returns randomly either rock, paper or scissors

function computerplay() {
    // Create array containing rock, paper and scissors
    const choice = ["rock", "paper", "scissors"];

    // randomly select index from array (Math.random() outputs random number between 0 and 1) multiply by length of array and round to lowest whole number to get randomElement.
    let randomElement = choice[Math.floor(Math.random() * choice.length)];

    // return random selection this is the computerplay choice for a round of rock paper scissors
    return randomElement;

}








//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection - 
//and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).