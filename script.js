const playerChoice= document.querySelectorAll(".choice");
let humanScore = 0;
let computerScore = 0;
const moves = ["rock","paper","scissors"];

playerChoice.forEach(choice =>{
    choice.addEventListener('click' , playRound);
});

function getComputerChoice(){
    return moves[Math.floor(Math.random() * 3)];
}

function getHumanChoice(event){
    return event.target.id;
}

function playRound(event){
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();
    const verdict = determineWinner(humanChoice , computerChoice);
    displayResult(verdict);
}

function determineWinner(humanChoice , computerChoice){
    const humanIndex = moves.indexOf(humanChoice);
    const computerIndex = moves.indexOf(computerChoice);
    const decider = Math.abs(humanIndex - computerIndex) % 3;
    if (decider == 0) return 0;
    else if (decider == 1) return -1;
    else return 1
}

function playGame(){
    
}

function test(){
    console.log("click");
}