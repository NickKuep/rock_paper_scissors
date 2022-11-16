/*
    Generates a round of rock paper scissors with the input of playerSelection and computerSelection.
    Returns a roundOutcome
*/
function playRound(playerSelection) {
    const computerSelection = generateComputerSelection()
    const result = roundOutcome(playerSelection, computerSelection)
    return result
}

/* 
Params: 
    playerSelection: String - The selection the player has made; can be [rock, paper, scissors]
    computerSelection: String - The selection randomly chosen by the computer; can be [rock, paper, scissors]
Returns:
    result: String - String formatted to display outcome information
    error: Error - Incorrect selection data recieved
*/
function roundOutcome(playerSelection, computerSelection) {
    if (playerSelection == `rock`) {
        if (computerSelection == `rock`) {
            return `Tie!`;
        } else if (computerSelection == `paper`) {
            return `You lost! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You won! ${playerSelection} beats ${computerSelection}` ;
        }
    } else if (playerSelection == `paper`) {
        if (computerSelection == `rock`) {
            return `You lost! ${computerSelection} beats ${playerSelection}`;
        } else if (computerSelection == `paper`) {
            return `Tie!`;
        } else {
            return `You won! ${playerSelection} beats ${computerSelection}`;
        }
    } else if (playerSelection == `scissors`) {
        if (computerSelection == `rock`) {
            return `You lost! ${computerSelection} beats ${playerSelection}`
        } else if (computerSelection == `paper`) {
            return `You won! ${playerSelection} beats ${computerSelection}`
        } else {
            return `Tie!`
        }
    } else {
        throw new Error(`expected rock, paper, or scissors. Received ${playerSelection}`)
    }
}

/* 
Params:
    none
Returns:
    result: String - 'rock' | 'paper' | 'scissors'
*/
function generateComputerSelection () {
    const rng = randomInt(3);

    if (rng == 0) {
        return 'rock'
    } else if (rng == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

/*
    Determines the computerSelection: rock, paper, or scissors
*/
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

/*
    A loop that will generate and track 5 rounds of rock, paper, scissors
Params: roundOutcome
Results: a list of 5 rounds of roundOutcome and determine winner
*/
function playGame() {
    let playerWin = 0
    let computerWin = 0
    
    for (let i = 0; i < 5; i ++) {
        let playerSelection = prompt('rock, paper, or scissors????????')
        const computerSelection = generateComputerSelection();
        const roundResult = roundOutcome(playerSelection, computerSelection)
        console.log(roundResult)
        if (roundResult.includes('You won!')) {
            playerWin = playerWin + 1
        } else if (roundResult.includes('You lost!')) {
            computerWin = computerWin + 1
        }
    } 
    if (playerWin > computerWin) {
        console.log("WINNER, WINNER! Dinner tonight is chicken.......")
    } else if (playerWin < computerWin) {
        console.log("You lost! YOU ABSOLUTE BAFFOON")
    } else {
        console.log("You have tied! BOOOOORING!")
    }
    return
}

playGame()