//Global Variables
let humanScore = 0, computerScore = 0;
let round = 1;
let computerChoice = "";
let humanChoice = "";
let gameScore = document.querySelector(".scoreboard");
let scoreboard = document.createElement("div");
let roundScore = document.createElement("div");

//cheat = 1 lets you see the computer's choice before making a decision (for debugging).
let cheat = 1;

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

    if (cheat == 1) console.log("[Cheat] The computer chose " + computerChoice);

    return computerChoice;
}

function getHumanChoice() {
    //Need to add playResult after each button
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
        console.log("You chose Rock.");
        humanChoice = "ROCK";
        buttons.removeChild(showButtons);
        playResult();
    });

    btn_paper.addEventListener("click", () => {
        console.log("You chose Paper.");
        humanChoice = "PAPER";
        buttons.removeChild(showButtons);
        playResult();
    });

    btn_scissors.addEventListener("click", () => {
        console.log("You chose Scissors.");
        humanChoice = "SCISSORS";
        buttons.removeChild(showButtons);
        playResult();
    });

    return humanChoice;
}

function playRound() {
    humanChoice = "";
    computerChoice = "";

    getComputerChoice();
    getHumanChoice();
}

function playResult() {
    let gameSection = document.querySelector(".rpsgame");
    let gameResult = document.createElement("div");
    let roundEnd = document.createElement("button");
    
    gameSection.appendChild(gameResult);

    if (humanChoice == computerChoice) {
        gameResult.textContent = "It is a tie! Both players chose " + humanChoice + "!";
        roundEnd.textContent = "Restarting Round";
        round++;
    }

    else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        gameResult.textContent = "You lose... " + humanChoice + " beats " + computerChoice + "!";
        roundEnd.textContent = "Continue";
        computerScore++;
        round++;
    }

    else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        gameResult.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!"
        roundEnd.textContent = "Continue";
        humanScore++;
        round++;
    }

    else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        gameResult.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!";
        roundEnd.textContent = "Continue";
        humanScore++;
        round++;
    }

    else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        gameResult.textContent = "You lose... " + humanChoice + " beats " + computerChoice + "!";
        roundEnd.textContent = "Continue";
        computerScore++;
        round++;
    }

    else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        gameResult.textContent = "You lose... " + humanChoice + " beats " + computerChoice + "!";
        roundEnd.textContent = "Continue";
        computerScore++;
        round++;
    }

    else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        gameResult.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!";
        roundEnd.textContent = "Continue";
        humanScore++;
        round++;
    }

    else {
        gameResult.textContent = "Something went wrong with the game, restarting round...";
        roundEnd.textContent = "Restart Round";
    }


    gameResult.appendChild(roundEnd);
    roundEnd.addEventListener("click", () => {
        gameSection.removeChild(gameResult);
        gameResult.removeChild(roundEnd);
        playRound();
    });

    showScore();
    //gameSection.appendChild(gameResult);
    // setTimeout(() => { startGame(); }, 1000);
}

function showScore() {
    roundScore.textContent = "Round: " + round;
    scoreboard.textContent = "Score: " + humanScore + " (You) - " + computerScore;
}

function startGame() {

    let gameStart = document.querySelector(".scoreboard");
    let btn_start = document.createElement("button");
    humanChoice = "";
    humanScore = 0;
    computerScore = 0;

    gameStart.appendChild(btn_start);
    btn_start.textContent = "Start Game";

    btn_start.addEventListener("click", () => {
        gameStart.removeChild(btn_start);
        gameScore.appendChild(roundScore);
        gameScore.appendChild(scoreboard);
        showScore();
        playRound();
    });

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
