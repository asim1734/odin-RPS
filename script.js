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
    console.log(humanChoice + computerChoice);
}

function playGame(){
    
}

function test(){
    console.log("click");
}