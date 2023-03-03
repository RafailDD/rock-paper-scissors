function getComputerChoice() {
    let computerChoice=Math.ceil(3*Math.random());
    //console.log(computerChoice);
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

console.log(getComputerChoice());
