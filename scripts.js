const gameScore = document.querySelector(".scoreboard");
const gameSection = document.querySelector(".rpsgame");
const p = document.querySelector("p");
const scoreboard = document.createElement("div");
const roundScore = document.createElement("div");
const btn_reset = document.querySelector("#reset")
const btn_cheat = document.querySelector("#cheat");

//Global Variables
let humanScore = 0, computerScore = 0, round = 1;
let computerChoice;
let humanChoice;

//cheat = 1 lets you see the computer's choice in the console before making a decision (for debugging).
let cheat = true;
let cheatMsg = document.createTextNode("Cheats are ENABLED. View the console to see the computer's choice before choosing your own.");

function getComputerChoice() {
    // Chooses a number between 1 and 3
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

    if (cheat == 1) console.log("[Cheat] Round " + round + ": The computer chose " + computerChoice);

    return computerChoice;
}

function getHumanChoice() {
    let buttons = document.querySelector(".rpsgame");
    let showButtons = document.createElement("section");
    let btn_rock = document.createElement("button");
    let btn_paper = document.createElement("button");
    let btn_scissors = document.createElement("button");

    buttons.appendChild(showButtons);
    showButtons.appendChild(btn_rock);
    showButtons.appendChild(btn_paper);
    showButtons.appendChild(btn_scissors);
    btn_rock.textContent = "Rock";
    btn_paper.textContent = "Paper";
    btn_scissors.textContent = "Scissors";

    btn_rock.addEventListener("click", () => {
        console.log("You chose ROCK");
        humanChoice = "ROCK";
        buttons.removeChild(showButtons);
        playResult();
    });

    btn_paper.addEventListener("click", () => {
        console.log("You chose PAPER");
        humanChoice = "PAPER";
        buttons.removeChild(showButtons);
        playResult();
    });

    btn_scissors.addEventListener("click", () => {
        console.log("You chose SCISSORS");
        humanChoice = "SCISSORS";
        buttons.removeChild(showButtons);
        playResult();
    });

    return humanChoice;
}

function playRound() {
    let endMsg = document.createElement("div");
    let continueButton = document.createElement("button");

    humanChoice = "";
    computerChoice = "";

    if (humanScore >= 3 && computerScore <3) {
        console.log("Congratulations! You win the game!");
        endMsg.textContent = "Congratulations! You win the game! Start a new game?"
        continueButton.textContent = "Rematch";
        gameScore.appendChild(endMsg);
        gameScore.appendChild(continueButton);
        continueButton.addEventListener("click", () => {
            gameScore.removeChild(endMsg);
            gameScore.removeChild(continueButton);
            gameScore.removeChild(roundScore);
            gameScore.removeChild(scoreboard);
            startGame();
        });
    }

    else if (computerScore >= 3 && humanScore <3) {
        console.log("You lost the game...");
        endMsg.textContent = "You lost the game... Rematch?"
        continueButton.textContent = "Rematch";
        gameScore.appendChild(endMsg);
        gameScore.appendChild(continueButton);
    
        continueButton.addEventListener("click", () => {
            gameScore.removeChild(endMsg);
            gameScore.removeChild(continueButton);
            gameScore.removeChild(roundScore);
            gameScore.removeChild(scoreboard);
            startGame();
        });
    }

    else {
        getComputerChoice();
        getHumanChoice();
    }
}

function playResult() {
    let gameResult = document.createElement("div");
    let resultButton = document.createElement("br");
    let roundEnd = document.createElement("button");
    
    gameSection.innerHTML = "";
    gameSection.appendChild(gameResult);

    if (humanChoice == computerChoice) {
        gameResult.textContent = "It is a tie! Both players chose " + humanChoice + "!";
        gameResult.appendChild(resultButton);
        roundEnd.textContent = "Continue";
        round++;
    }

    else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        gameResult.textContent = "You lose... " + humanChoice + " beats " + computerChoice + "!";
        gameResult.appendChild(resultButton);
        roundEnd.textContent = "Continue";
        computerScore++;
        round++;
    }

    else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        gameResult.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!"
        gameResult.appendChild(resultButton);
        roundEnd.textContent = "Continue";
        humanScore++;
        round++;
    }

    else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        gameResult.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!";
        gameResult.appendChild(resultButton);
        roundEnd.textContent = "Continue";
        humanScore++;
        round++;
    }

    else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        gameResult.textContent = "You lose... " + humanChoice + " beats " + computerChoice + "!";
        gameResult.appendChild(resultButton);
        roundEnd.textContent = "Continue";
        computerScore++;
        round++;
    }

    else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        gameResult.textContent = "You lose... " + humanChoice + " beats " + computerChoice + "!";
        gameResult.appendChild(resultButton);
        roundEnd.textContent = "Continue";
        computerScore++;
        round++;
    }

    else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        gameResult.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!";
        gameResult.appendChild(resultButton);
        roundEnd.textContent = "Continue";
        humanScore++;
        round++;
    }

    else {
        gameResult.textContent = "Something went wrong with the game, restarting round...";
        gameResult.appendChild(resultButton);
        roundEnd.textContent = "Restarting Round";
    }

    gameResult.appendChild(roundEnd);
    roundEnd.addEventListener("click", () => {
        gameSection.removeChild(gameResult);
        playRound();
    });

    showScore();
}

function showScore() {
    roundScore.textContent = "Round: " + round;
    scoreboard.textContent = "Score: " + humanScore + " (You) - " + computerScore;
}

function startGame() {
    let gameStart = document.querySelector(".scoreboard");
    let btn_start = document.createElement("button");
    
    humanScore = 0;
    computerScore = 0;
    round = 1;

    gameStart.innerHTML = "";
    gameStart.appendChild(btn_start);
    btn_start.textContent = "Start Game";

    btn_start.addEventListener("click", () => {
        gameStart.removeChild(btn_start);
        gameScore.appendChild(roundScore);
        gameScore.appendChild(scoreboard);
        showScore();
        playRound();
    });
}

startGame();

btn_reset.addEventListener("click", () => {
    startGame();
    gameSection.innerHTML = "";
})

btn_cheat.addEventListener("click", () => {
    if (cheat == true) {
        p.appendChild(cheatMsg);
        cheat = false;
        btn_cheat.textContent = "Cheat: OFF";
    }

    else if (cheat == false) {
        cheat = true;
        btn_cheat.textContent = "Cheat: ON" ;
        p.removeChild(cheatMsg);
    }
})

