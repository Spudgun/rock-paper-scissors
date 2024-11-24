let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
	let options = ["rock", "paper", "scissors"];
	let computerChoice = options[Math.floor(Math.random() * 3)];
	return computerChoice;
}

function getHumanChoice() {
	let humanChoice = prompt("Choose Rock, Paper or Scissors");

	if (humanChoice != "rock" && humanChoice != "scissors" && humanChoice != "paper") {
		getHumanChoice();
	}

	return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
	console.log(humanChoice, computerChoice);
	if (humanChoice == "rock" && computerChoice == "scissors") {
		humanScore += 1;
		displayRoundResult("win", humanChoice, computerChoice);
	} else if (humanChoice == "rock" && computerChoice == "paper") {
		computerScore += 1;
		displayRoundResult("lose", humanChoice, computerChoice);
	} else if (humanChoice == "rock" && computerChoice == "rock") {
		computerScore += 1;
		displayRoundResult("draw", humanChoice, computerChoice);
	}
}

function displayRoundResult(res, playerChoice, computerChoice) {
	if (res == "win") {
		console.log(`You ${res}! ${playerChoice} beats ${computerChoice}.`);
	} else if (res == "lose") {
		console.log(`You ${res}! ${playerChoice} loses to ${computerChoice}.`);
	} else {
		console.log(`You ${res}! No one wins.`);
	}
}

//playRound(getHumanChoice(), getComputerChoice());
