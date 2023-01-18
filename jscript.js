"use strict";

let playersPick = document.querySelector(".rock-paper-scissors-icon-player");
let computersPick = document.querySelector(
  ".rock-paper-scissors-icon-computer"
);
let playerScoreText = document.querySelector(".score-player");
let computerScoreText = document.querySelector(".score-computer");

let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

let computerSelection;
let playerSelection;

let winnerText = document.querySelector(".winner");
let choices = document.querySelector(".choices");
let playAgainBtn = document.querySelector(".play-again");

let getComputerChoice = function () {
  const computerChoice = ["rock", "paper", "scissors"];

  const randomizer = Math.trunc(Math.random() * 3);

  const computerRandomizer = computerChoice[randomizer];

  computersPick.src = `Images/${computerChoice[randomizer]}.png`;
  computersPick.style.display = "block";

  return computerRandomizer;
};

const playRound = function (playerSelection, computerSelection) {
  // Rock
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Computer wins`
    );
    computerScore++;
    computerScoreText.textContent = computerScore;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Player wins`
    );
    playerScore++;
    playerScoreText.textContent = playerScore;
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Draw`
    );
    // Paper
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Draw`
    );
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Computer wins`
    );
    computerScore++;
    computerScoreText.textContent = computerScore;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Player wins`
    );
    playerScore++;
    playerScoreText.textContent = playerScore;
    // Scissors
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Player wins`
    );
    playerScore++;
    playerScoreText.textContent = playerScore;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Draw`
    );
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Computer wins`
    );
    computerScore++;
    computerScoreText.textContent = computerScore;
  }

  winner();
};

rockBtn.addEventListener("click", function () {
  playersPick.src = "Images/rock.png";
  playersPick.style.display = "block";
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener("click", function () {
  playersPick.src = "Images/paper.png";
  playersPick.style.display = "block";
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener("click", function () {
  playersPick.src = "Images/scissors.png";
  playersPick.style.display = "block";
  playerSelection = "scissors";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

const winner = function () {
  if (playerScore === 5) {
    winnerText.textContent = "Player won the game!";
    choices.style.display = "none";
    playAgainBtn.style.display = "block";
  } else if (computerScore === 5) {
    winnerText.textContent = "Computer won the game!";
    choices.style.display = "none";
    playAgainBtn.style.display = "block";
  }
};

playAgainBtn.addEventListener("click", function () {
  playAgainBtn.style.display = "none";
  choices.style.display = "block";
  playerScore = 0;
  computerScore = 0;
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  winnerText.textContent = "Score";
});

// const game = function () {
//   playRound(playerSelection, computerSelection);
// };
