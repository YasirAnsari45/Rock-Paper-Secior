const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;


const choices = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

function playGame(userChoice) {
    userChoiceDisplay.textContent = choices[userChoice];
    const computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = choices[computerChoice];
    const winner = getWinner(userChoice, computerChoice);

    if (winner === "draw") {
        resultDisplay.textContent = "😐 It's a Draw!";
    } else if (winner === "player") {
        resultDisplay.textContent = "🎉 You Win!";
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        resultDisplay.textContent = "💻 Computer Wins!";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) {
        return "draw";
    }
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    }
    return "computer";
}
