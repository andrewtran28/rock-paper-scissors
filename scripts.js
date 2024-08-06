//Global Variables
let humanScore = 0, computerScore = 0;
let round = 1;
let humanChoice = "";
let gameScore = document.querySelector(".scoreboard");
let scoreboard = document.createElement("div");
let roundScore = document.createElement("div");

//cheat = 1 lets you see the computer's choice before making a decision (for debugging).
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
    //  let humanChoice = window.prompt("Choose rock, paper, or scissors.").toUpperCase();
    let humanChoice = "";

    // while (humanChoice != "ROCK" && humanChoice != "PAPER" && humanChoice != "SCISSORS") {
    //      humanChoice = window.prompt("Choice is invalid. Please type 'rock', 'paper', or 'scissors'.").toUpperCase();
    // }

    return humanChoice;
}

function playRound (computerChoice, humanChoice) {
    let gameSection = document.querySelector(".result");
    let gameResult = document.createElement("div");
    let roundEnd = document.createElement("button");
    
    if (humanChoice == computerChoice) {
        gameResult.textContent = "It is a tie! Both players chose " + humanChoice + "!";
        round++;
    }

    else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        gameResult.textContent = "You lose... " + humanChoice + " beats " + computerChoice + "!";
        computerScore++;
        round++;
    }

    else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        gameResult.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!"
        humanScore++;
        round++;
    }

    else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        gameResult.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!";
        humanScore++;
        round++;
    }

    else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        gameResult.textContent = "You lose... " + humanChoice + " beats " + computerChoice + "!";
        computerScore++;
        round++;
    }

    else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        gameResult.textContent = "You lose... " + humanChoice + " beats " + computerChoice + "!";
        computerScore++;
        round++;
    }

    else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        gameResult.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!";
        humanScore++;
        round++;
    }

    else {
        gameResult.textContent = "Something went wrong with the game, restarting round...";
        gameResult.appendChild(roundEnd);
        roundEnd.textContent = "Restart Round";

        roundEnd.addEventListener("click", () => {
            gameResult.removeChild(roundEnd);
        });

    }

    showScore();
    gameSection.appendChild(gameResult);
    // setTimeout(() => { startGame(); }, 1000);
}

function showScore() {
    roundScore.textContent = "Round: " + round;
    scoreboard.textContent = "Score: " + humanScore + " (You) - " + computerScore;
}

function startGame() {

    let gameStart = document.querySelector(".scoreboard");
    let btn_start = document.createElement("button");

    gameStart.appendChild(btn_start);
    btn_start.textContent = "Start Game";

    btn_start.addEventListener("click", () => {
        gameStart.removeChild(btn_start);
        gameScore.appendChild(roundScore);
        gameScore.appendChild(scoreboard);
        showScore();
    });

    let humanChoice = "";
    humanScore = 0;
    computerScore = 0;

    //console.log("Game start!");
    //showScore();
    // while (humanScore <3 && computerScore <3) {
    //    getChoice(getComputerChoice(), humanChoice);
    //    showScore();
    // }

    // if (humanScore >= 3 && computerScore <3) {
    //     console.log("Congratulations! You win the game! Starting a new game...");
    // }

    // else if (computerScore >= 3 && humanScore <3) {
    //     console.log("You lost the game... Starting a new game...");
    // }
}


//APP BEGINS

console.log("This is the Rock Paper Scissors Game!");
startGame();





let btn_rock = document.querySelector("#btn_rock");
btn_rock.addEventListener("click", () => {
    console.log("You chose rock");

    humanChoice = "ROCK";
    playRound(getComputerChoice(), humanChoice);
});

let btn_paper = document.querySelector("#btn_paper");
btn_paper.addEventListener("click", () => {
    console.log("You chose paper");

    humanChoice = "PAPER";
    playRound(getComputerChoice(), humanChoice);
});

let btn_scissors = document.querySelector("#btn_scissors");
btn_scissors.addEventListener("click", () => {
    console.log("You chose scissors");

    humanChoice = "SCISSORS";
    playRound(getComputerChoice(), humanChoice);
});
