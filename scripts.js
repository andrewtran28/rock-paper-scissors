console.log("This is the Rock Paper Scissors JavaScript.");

//Global Variables
let humanScore = 0, computerScore = 0;

function getComputerChoice() {

    // Chooses a number between 1 and 3
    let computerChoice;
    let computerNum = Math.floor(Math.random()*3);

    //Converts number to shape string
    if (computerNum === 0) {
        computerChoice = "rock";
    }
    
    else if (computerNum === 1) {
        computerChoice = "paper";
    }

    else if (computerNum === 2) {
        computerChoice = "scissors";
    }

    else {
        computerChoice = "Not valid shape";
    }

    // console.log("The computer chose: " + computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = window.prompt("Choose 'rock', 'paper', or 'scissors'.");

    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
         humanChoice = window.prompt("Choice is invalid. Please type 'rock', 'paper', or 'scissors'.");
    }

    console.log("You have chosen: " + humanChoice);
    return humanChoice;
}

function playRound () {
    let computerChoice = getComputerChoice();
    console.log("Computer chose: " + computerChoice);
    let humanChoice = getHumanChoice();
    console.log("You have chose: " + humanChoice);


    if (computerChoice === humanChoice) {

        console.log("It is a tie!");
    }

}

console.log("Game started.");
getHumanChoice();
// playRound();