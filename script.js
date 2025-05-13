// console.log("rock paper scissors");

const buttons = document.querySelectorAll("button"); // looping these btns
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id; // rock paper scissors
    const computerChoice = ["rock", "paper", "scissors"][
      Math.floor(Math.random() * 3)
    ];

    // winner
    const winner = getWinner(playerChoice, computerChoice);
    console.log(winner);

    // updateScore
    updateScore(winner);
    resultDiv.textContent = `you choose ${playerChoice} , 
    computer Choice ${computerChoice}. ${winner}`;
    resultDiv.style.color = "blue";
    resultDiv.style.fontFamily = "arial";
    resultDiv.style.fontSize = "32px";
  });
});

function getWinner(player, computer) {
  if (player === computer) return "it's tie , isku mid";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You Win";
  } else {
    return "Computer Wins";
  }
}

function updateScore(winner) {
  if (winner.includes("You")) playerScore++;
  if (winner.includes("Computer")) computerScore++;
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}
