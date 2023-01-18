"use strict";

const getComputerChoice = function () {
  const computerChoice = ["Rock", "Paper", "Scissors"];

  const computerRandomizer = computerChoice[Math.trunc(Math.random() * 3)];

  return computerRandomizer;
};

const computerSelection = getComputerChoice();

const playRound = function (playerSelection, computerSelection) {
  // Rock
  if (playerSelection === "rock" && computerSelection === "Paper") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Computer wins`
    );
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Player wins`
    );
  } else if (playerSelection === "rock" && computerSelection === "Rock") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Draw`
    );
    // Paper
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Draw`
    );
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Computer wins`
    );
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Computer wins`
    );
    // Scissors
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Player wins`
    );
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "Scissors"
  ) {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Draw`
    );
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    console.log(
      `${playerSelection} (Player) vs ${computerSelection} (Computer): Computer wins`
    );
  }
};

const game = function () {
  for (let i = 0; i < 5; i++) {
    // const playerSelection = prompt().toLowerCase();
    playRound(playerSelection, computerSelection);
  }
};

game();
