let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let options = ['rock', 'paper', 'scissors'];
	let computerChoice = options[Math.floor(Math.random() * 3)];
	return computerChoice;
}

function getHumanChoice() {
	let humanChoice = prompt('Choose Rock, Paper or Scissors');

	if (humanChoice != 'rock' && humanChoice != 'scissors' && humanChoice != 'paper') {
		getHumanChoice();
	} else {
		return humanChoice.toLowerCase();
	}
}

function playRound(humanChoice, computerChoice) {
	let winner;
	if (humanChoice == 'rock' && computerChoice == 'scissors') {
		winner = 'player';
	} else if (humanChoice == 'rock' && computerChoice == 'paper') {
		winner = 'computer';
	} else if (humanChoice == 'paper' && computerChoice == 'rock') {
		winner = 'player';
	} else if (humanChoice == 'paper' && computerChoice == 'scissors') {
		winner = 'computer';
	} else if (humanChoice == 'scissors' && computerChoice == 'rock') {
		winner = 'computer';
	} else if (humanChoice == 'scissors' && computerChoice == 'paper') {
		winner = 'player';
	}
	return { status: winner, human: humanChoice, computer: computerChoice };
}

function playGame(playerChoice) {
	let result = playRound(playerChoice, getComputerChoice());
	let resultHtml = document.querySelector('.result');
	let score = document.querySelector('.score');

	if (result.status == 'player') {
		humanScore += 1;
		resultHtml.innerText = `You win this round! ${result.human} beats ${result.computer}.`;
	} else if (result.status == 'computer') {
		computerScore += 1;
		resultHtml.innerText = `You lose this round ${result.human} loses to ${result.computer}.`;
	} else {
		resultHtml.innerText = 'You both draw this round!';
	}

	score.innerText = 'Computer: ' + computerScore + ' - ' + 'Player: ' + humanScore;
	if (computerScore < 5 && humanScore < 5) {
	} else if (computerScore == 5) {
		resultHtml.innerText = 'Computer Wins!';
		computerScore = 0;
		humanScore = 0;
	} else {
		resultHtml.innerText = 'You win!';
		computerScore = 0;
		humanScore = 0;
	}
}

let selection = document.querySelectorAll('.choice');
console.log(selection);

selection.forEach(function (item) {
	item.onclick = (event) => {
		playGame(event.target.dataset.choice);
	};
});
