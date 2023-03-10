function getComputerChoice() {
    let computerChoice=Math.ceil(3*Math.random());
    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "Something went wrong";
    }
}

function getUserInput() {
    let playerSelection;
    let inputCheck; 
    do {
        playerSelection = prompt("Rock, paper or scissors? Choose now!").toLowerCase();
        inputCheck=false;
        if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            alert("Your input was invalid.\n\nSpelling siscorrs can be confusing, but after coding this game I'll never misspell it again.\n\nPlease choose between rock, paper or scissors.");
            inputCheck=true;
        }
    } while (inputCheck);
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a tie!";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats rock";
        } else if (computerSelection === "scissors") {
            return "You win! Rock beats scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock";
        } else if (computerSelection === "paper") {
            return "It's a tie!";
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beat paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors";
        } else if (computerSelection === "paper") {
            return "You win! Scissors beat paper";
        } else if (computerSelection === "scissors") {
            return "It's a tie!";
        }
    }
}

function calcFinalScore(playerScore, computerScore) {
    if (playerScore > computerScore) {
        if ( playerScore - computerScore == 5) {
            return "An anti-cheat is way out of this project's budget, but basic math isn't. The chances of winning 5 times in a row are... like, uhm, super slim... Google it, bozo.";
        } else if (playerScore - computerScore >= 3){
            return `You've beaten an immensely complicated and excessively advanced Artificial Neural Network with a score of \n Player: ${playerScore} - Computer: ${computerScore}`;
        } else {
            return `Phew, that was a close one. If I were you, I'd keep trying for a better score. Your opponent might feel lonely if you stop now.\n Player: ${playerScore} - Computer: ${computerScore}`;
        }
    } else if (playerScore < computerScore) {
        return `You've been completely annihilated at this high stake duel against a pile of thinking sand with a shameful score of \n Player: ${playerScore} - Computer: ${computerScore}`;
    } else {
        if (playerScore === 5) {
            return "The chances of getting a tie 5 times in a row are 0.412%, but somehow, you did it. Congrats?";
        } else {
            return "It's a tie. This calls for a rematch."
        }
    } 
}

function play() {
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = getUserInput();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.substr(4,3) === "win") {
            playerScore++;
        } else if (roundResult.substr(4,4) === "lose") {
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
    console.log(`The score so far is\n Player: ${playerScore} - Computer: ${computerScore}`);
    }
    console.log('The match has ended!')
    console.log(calcFinalScore(playerScore, computerScore));
}

play();
