console.log("This is the Rock Paper Scissors JavaScript.");

function getComputerChoice() {
    // Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
    // Need number between 0-2

    let computerChoice = Math.floor(Math.random()*3);
    // Chooses a number between 0 and 2;

    console.log("The computer chose: " + computerChoice);

}

function getHumanChoice() {
    let humanChoice = window.prompt("What is your choice?");
    console.log("You have chosen: " + humanChoice);
    // Need to implement buttons for the human to choose.
}

getComputerChoice();
getHumanChoice();