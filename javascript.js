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
        throw new Error(`expected rock, paper, or scissors. Recieved ${playerSelection}`)
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


let playerSelection = process.argv[2] || 'rock';

const outcome = playRound(playerSelection)
console.log(outcome)