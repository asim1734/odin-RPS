const playerChoice= document.querySelectorAll(".choice");
let humanScore = 0;
let computerScore = 0;
let roundCount = 1 ;
const moves = ["rock","paper","scissor"];

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
    displayVersus(humanChoice , computerChoice);
    displayVerdictText(verdict,humanChoice , computerChoice);
    updateScores(verdict);
}

function determineWinner(humanChoice , computerChoice){
    const humanIndex = moves.indexOf(humanChoice);
    const computerIndex = moves.indexOf(computerChoice);
    const decider = Math.abs(humanIndex - computerIndex) % 3;
    if (decider == 0) return 0;
    else if (decider == 1) return -1;
    else return 1
}

function displayVersus(humanChoice , computerChoice){
    const versusDiv = document.querySelector(".versus");

    const humanChoiceImage = document.createElement("img");
    const computerChoiceImage = document.createElement("img");

    humanChoiceImage.src = `${humanChoice}.jpg`;
    humanChoiceImage.style.width = "15%";
    versusDiv.appendChild(humanChoiceImage);

    const VSText = document.createElement("p");
    VSText.textContent = "VS."
    VSText.style.cssText = "display: inline; color:#FFD700; font-weight: bold; font-size:large"
    versusDiv.appendChild(VSText);

    computerChoiceImage.src = `${computerChoice}.jpg`;
    computerChoiceImage.style.width = "15%";
    versusDiv.appendChild(computerChoiceImage);

    // roundCount += 1;
    // roundCounter.textContent = `Round: ${roundCount}`;
}

function displayVerdictText(verdict,humanChoice , computerChoice){
    const resultP = document.querySelector(".result-p");

    const result = (verdict === 1) ? 'win' : (verdict === -1) ? 'lose' : 'tied';
    const formattedResult = `You ${result}!!`;
    resultP.textContent = formattedResult;

}

function updateScores(verdict){
    const humanScoreSelector = document.querySelector(".player-score");
    const computerScoreSelector =  document.querySelector(".computer-score");
    const roundCounter =  document.querySelector(".round-counter");

    if (verdict == 1){
        humanScore +=1;
        humanScoreSelector.textContent = `Player: ${humanScore}`;
    }
    else if (verdict == -1){
        computerScore +=1;
        computerScoreSelector.textContent = `Computer: ${computerScore}`;
    }
}

function playGame(){
    
}

function test(){
    console.log("click");
}