let moves = ["rock","paper","scissor"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    return moves[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    return prompt("Enter your move");
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie between ${humanChoice} and ${computerChoice}`);
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "scissor") {
            console.log(`You win! rock beats scissor`);
            humanScore++;
        } else {
            console.log(`You lose! paper beats rock`);
            computerScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log(`You win! paper beats rock`);
            humanScore++;
        } else {
            console.log(`You lose! scissor beats paper`);
            computerScore++;
        }
    }
    else {
        if (computerChoice === "paper") {
            console.log(`You win! scissor beats paper`);
            humanScore++;
        } else {
            console.log(`You lose! rock beats scissor`);
            computerScore++;
        }
    }
}

function playGame(){
    for(let i = 0 ; i < 5 ; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        if (!humanChoice.includes(humanChoice)){
            console.log(`Invalid choice: ${humanChoice}. Please choose rock, paper, or scissor.`);
            i--;
        }
        playRound(humanChoice.toLowerCase() , computerChoice)
    }
    if (computerScore > humanScore) console.log("Computer wins :(") 
    else console.log("You win!!!")
}

