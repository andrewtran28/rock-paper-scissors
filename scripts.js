//Global Variables
let humanScore = 0, computerScore = 0;

//cheat = 1 lets you see the computers choice before making a decision.
let cheat = 1;

function getComputerChoice() {

    // Chooses a number between 1 and 3
    let computerChoice;
    let computerNum = Math.floor(Math.random()*3);

    //Converts number to shape string
    if (computerNum === 0) {
        computerChoice = "ROCK";
    }
    
    else if (computerNum === 1) {
        computerChoice = "PAPER";
    }

    else if (computerNum === 2) {
        computerChoice = "SCISSORS";
    }

    else {
        computerChoice = "Not a valid shape";
    }

    if (cheat == 1) console.log("[Cheat] The computer chose " + computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = window.prompt("Choose rock, paper, or scissors.").toUpperCase();

    while (humanChoice != "ROCK" && humanChoice != "PAPER" && humanChoice != "SCISSORS") {
         humanChoice = window.prompt("Choice is invalid. Please type 'rock', 'paper', or 'scissors'.").toUpperCase();
    }

    return humanChoice;
}

function playRound (computerChoice, humanChoice) {
    console.log("Computer chose: " + computerChoice);
    console.log("You have chosen: " + humanChoice);

    if (humanChoice == computerChoice) {
        console.log("It is a tie! Both players chose " + humanChoice + "!");
    }

    else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        console.log("You lose... " + humanChoice + " beats " + computerChoice + "!");
        computerScore++;
    }

    else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    }

    else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    }

    else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log("You lose... " + humanChoice + " beats " + computerChoice + "!");
        computerScore++;
    }

    else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        console.log("You lose... " + humanChoice + " beats " + computerChoice + "!");
        computerScore++;
    }

    else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    }

    else {
        console.log("Something went wrong with the game, restarting round...");
    }
}

function showScore() {
    console.log("Score: " + humanScore + " (You) - " + computerScore);
}

function startGame() {
    humanScore = 0;
    computerScore = 0;

    showScore();
    while (humanScore <3 && computerScore <3) {
        playRound(getComputerChoice(), getHumanChoice());
        showScore();
    }

    if (humanScore >= 3 && computerScore <3) {
        console.log("Congratulations! You win the game! Rematching in 5 seconds...");
    }

    else if (computerScore >= 3 && humanScore <3) {
        console.log("You lost the game... Rematching in 5 seconds...");
    }

    setTimeout(() => { startGame(); }, 5000);
}

console.log("This is the Rock Paper Scissors Game!");
startGame();

