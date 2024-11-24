let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let options = ["rock", "paper", "scissors"];
	let computerChoice = options[Math.floor(Math.random() * 3)];
	return computerChoice;
}

function getHumanChoice() {
	let humanChoice = prompt("Choose Rock, Paper or Scissors");

	if (humanChoice != "rock" && humanChoice != "scissors" && humanChoice != "paper") {
		getHumanChoice();
	} else {
		return humanChoice.toLowerCase();
	}
}

function playRound(humanChoice, computerChoice) {
	let winner;
	if (humanChoice == "rock" && computerChoice == "scissors") {
		winner = "player";
	} else if (humanChoice == "rock" && computerChoice == "paper") {
		winner = "computer";
	} else if (humanChoice == "paper" && computerChoice == "rock") {
		winner = "player";
	} else if (humanChoice == "paper" && computerChoice == "scissors") {
		winner = "computer";
	} else if (humanChoice == "scissors" && computerChoice == "rock") {
		winner = "computer";
	} else if (humanChoice == "scissors" && computerChoice == "paper") {
		winner = "player";
	}
	return { status: winner, human: humanChoice, computer: computerChoice };
}

function playGame() {
	for (i = 1; i < 6; i++) {
		let result = playRound(getHumanChoice(), getComputerChoice());

		console.log(`--------- Game ${i} ---------`);
		if (result.status == "player") {
			humanScore += 1;
			console.log(`You win ${result.human} beats ${result.computer}.`);
		} else if (result.status == "computer") {
			computerScore += 1;
			console.log(`You lose! ${result.human} loses to ${result.computer}.`);
		} else {
			console.log(`You draw! No one wins.`);
		}

		console.log("Computer: " + computerScore + " - " + "Player: " + humanScore);
	}
}

playGame();
