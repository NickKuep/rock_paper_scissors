//player Selection with button: rock, paper, or scissors
const selectionButtons = document.querySelectorAll("[data-selection]");
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const playerSelection = selectionButton.dataset.selection;
    playRound(playerSelection);
  });
});

/* 
Params: 
    playerSelection: String - The selection the player has made; can be [rock, paper, scissors]
    computerSelection: String - The selection randomly chosen by the computer; can be [rock, paper, scissors]
Returns:
    result: String - String formatted to display outcome information
    error: Error - Incorrect selection data received
*/

function roundOutcome(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection == `rock`) {
    if (computerSelection == `rock`) {
      return `Tie!`;
    } else if (computerSelection == `paper`) {
      return "computerWin";
    } else {
      return "playerWin";
    }
  } else if (playerSelection == `paper`) {
    if (computerSelection == `rock`) {
      return "playerWin";
    } else if (computerSelection == `paper`) {
      return `Tie!`;
    } else {
      return "computerWin";
    }
  } else if (playerSelection == `scissors`) {
    if (computerSelection == `rock`) {
      return "computerWin";
    } else if (computerSelection == `paper`) {
      return "playerWin";
    } else {
      return `Tie!`;
    }
  } else {
    throw new Error(
      `expected rock, paper, or scissors. Received ${playerSelection}`
    );
  }
}
/*
    Generates a round of rock paper scissors with the input of playerSelection and computerSelection.
    Returns a roundOutcome
*/

function playRound(playerSelection) {
  let computerSelection = generateComputerSelection();
  const result = roundOutcome(playerSelection, computerSelection);
  updateScore(result);
  const compUl = document.querySelector("#computerChoice");
  const compLi = document.createElement("li");
  const pUl = document.querySelector("#playerChoice");
  const pLi = document.createElement("li");
  pLi.textContent = `${playerSelection}`;
  pUl.appendChild(pLi);
  compLi.textContent = `${computerSelection}`;
  compUl.appendChild(compLi);
}

/* 
Params:
    none
Returns:
    result: String - 'rock' | 'paper' | 'scissors'
*/
function generateComputerSelection() {
  const rng = randomInt(3);

  if (rng == 0) {
    return "rock";
  } else if (rng == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

/*
    Determines the computerSelection: rock, paper, or scissors
*/
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateScore(result) {
  let playerScore = Number(pScore.textContent);
  let computerScore = Number(cScore.textContent);
  if (result == "playerWin") {
    playerScore = playerScore + 1;
    pScore.textContent = `${playerScore}`;
  } else if (result == "computerWin") {
    computerScore = computerScore + 1;
    cScore.textContent = `${computerScore}`;
  }
  if (playerScore >= 5) {
    alert("Player Wins!");
    resetGame();
  } else if (computerScore >= 5) {
    alert("Computer wins!");
    resetGame();
  }
}

function resetGame() {
  pScore.textContent = "0";
  cScore.textContent = "0";
}
