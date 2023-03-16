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
            return "An anti-cheat is way out of this project's budget,"+
                " but basic math isn't. The chances of winning 5 times"+
                " in a row are... like, uhm, super slim... Google it, bozo.";
        } else if (playerScore - computerScore >= 3){
            return "You've beaten an immensely complicated and "+
                "excessively advanced Artificial Neural Network with a"+
                ` score of \nPlayer: ${playerScore} - Computer: ${computerScore}`;
        } else {
            return "Phew, that was a close one. If I were you, I'd "+
                "keep trying for a better score. Your opponent might "+
                `feel lonely if you stop now.\nPlayer: ${playerScore}`+
                ` - Computer: ${computerScore}`;
        }
    } else if (playerScore < computerScore) {
        return "You've been completely annihilated at this high stake " +
            "duel against a pile of thinking sand with a shameful score"+
            ` of \nPlayer: ${playerScore} - Computer: ${computerScore}`;
    } else {
        if (playerScore === 5) {
            return "The chances of getting a tie 5 times in a row are "+
            "0.412%, but somehow, you did it. Congrats?";
        } else {
            return "It's a tie. This calls for a rematch."
        }
    } 
}

function play() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    const btn = document.querySelectorAll("button");
    btn.forEach(btn => {
        btn.addEventListener('click', () => {
            round++;
            if (round <= 5) {
                const computerSelection = getComputerChoice();
                const roundResult = playRound(btn.textContent, computerSelection);

                const results = document.querySelector(".results");
                //needed css for newline to work
                results.setAttribute('style', 'white-space: pre;');
                results.textContent = roundResult;

                //update current score
                if (roundResult.substr(4,3) === "win") {
                    playerScore++;
                } else if (roundResult.substr(4,4) === "lose") {
                    computerScore++;
                } else {
                    playerScore++;
                    computerScore++;
                }

                results.textContent += "\r\nThe score so far is\r\n"+
                    `Player: ${playerScore} - Computer: ${computerScore}`;

                if (round === 5) {
                    results.textContent = 'The match has ended!\r\n'
                    results.textContent += calcFinalScore(playerScore, computerScore);
                }
            } else {
                return;
            }
            


        });
    })
}

play();
