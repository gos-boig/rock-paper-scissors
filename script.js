console.log("Hello and welcome to Rock, Paper, Scissors!");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    
    if (random == 0) {
        const computerSelection = "rock";
        return computerSelection;
    } else if (random == 1) {
        const computerSelection = "paper";
        return computerSelection;
    } else if (random == 2) {
        const computerSelection = "scissors";
        return computerSelection;
    }
}

function playRound(playerSelectionIns, computerSelection) {

    /* lose conditions */
    if((playerSelectionIns == "paper" && computerSelection == "scissors") ||
        (playerSelectionIns == "scissors" && computerSelection == "rock") ||
         (playerSelectionIns == "rock" && computerSelection == "paper")) {
        const result = "You lose, " + computerSelection + " beats " + playerSelectionIns;
        return result;

    /* win conditions */
    } else if ((playerSelectionIns == "scissors" && computerSelection == "paper") ||
                (playerSelectionIns == "rock" && computerSelection == "scissors") ||
                 (playerSelectionIns == "paper" && computerSelection == "rock")) {
        const result = "You win, " + playerSelectionIns + " beats " + computerSelection;
        return result;

    /* draw */
    } else {
        const result = ("Draw! Try again");
        return result;
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        
        const playerSelection = window.prompt("Make your choice!");
        const playerSelectionIns = playerSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        playRound();
        console.log(playRound(playerSelectionIns, computerSelection));
        
        }
}

game();
