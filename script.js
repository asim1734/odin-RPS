const playerChoice= document.querySelectorAll(".choice");
let humanScore = 0;
let computerScore = 0;
let roundCount = 1 ;
const moves = ["rock","paper","scissor"];

function toggleListeners(add) {
    playerChoice.forEach(choice => {
        if (add) {
            choice.addEventListener('click', playRound);
        } else {
            choice.removeEventListener('click', playRound);
        }
    });
}
toggleListeners(true);

function getComputerChoice(){
    return moves[Math.floor(Math.random() * 3)];
}

function getHumanChoice(event){
    return event.target.id;
}

function playRound(event) {
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();
    const verdict = determineWinner(humanChoice, computerChoice);
    displayVersus(humanChoice, computerChoice);
    displayVerdictText(verdict, humanChoice, computerChoice);
    updateScores(verdict);

    if (roundCount == 5) {
        getALife();
    } else {
        toggleListeners(false);
        startNextRound();
    }
}

function determineWinner(humanChoice , computerChoice){
    const humanIndex = moves.indexOf(humanChoice);
    const computerIndex = moves.indexOf(computerChoice);

    if (humanIndex === computerIndex) return 0;

    const decider = (humanIndex - computerIndex + 3) % 3;

    if (decider === 1) return 1; 
    else return -1; 
}

function displayVersus(humanChoice , computerChoice){
    const resultDiv = document.querySelector(".result");

    const versusDiv = document.createElement("div");
    versusDiv.classList.add("versus");
    resultDiv.append(versusDiv);

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

}

function displayVerdictText(verdict,humanChoice , computerChoice){
    const resultDiv = document.querySelector(".result");

    const resultP = document.createElement("p");
    resultP.classList.add("result-p");
    resultDiv.append(resultP);

    const result = (verdict === 1) ? 'win' : (verdict === -1) ? 'lose' : 'tied';
    const formattedResult = `You ${result}!!`;
    resultP.textContent = formattedResult;

}

function updateScores(verdict){
    const humanScoreSelector = document.querySelector(".player-score");
    const computerScoreSelector =  document.querySelector(".computer-score");

    if (verdict == 1){
        humanScore +=1;
        humanScoreSelector.textContent = `Player: ${humanScore}`;
    }
    else if (verdict == -1){
        computerScore +=1;
        computerScoreSelector.textContent = `Computer: ${computerScore}`;
    }
}

function startNextRound(){
    const nextRoundBtn = document.createElement("button");
    const resultDiv =  document.querySelector(".result");

    nextRoundBtn.classList.add("next-round-btn");
    nextRoundBtn.textContent = "Start next round";
    document.body.appendChild(nextRoundBtn);

    nextRoundBtn.addEventListener("click" , function (){
        while (resultDiv.firstChild){
            resultDiv.removeChild(resultDiv.firstChild);
        }
        document.body.removeChild(nextRoundBtn);
    
        const roundCounter =  document.querySelector(".round-counter");
        roundCount += 1;
        roundCounter.textContent = `Round: ${roundCount}`;

        toggleListeners(true);
    });
}

function getALife() {
    const body = document.body;
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    const h1 = document.createElement("h1");
    h1.textContent = "GET A LIFE!!";
    h1.style.color = "red";
 
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.justifyContent = "center";
    wrapper.style.alignItems = "center";
    wrapper.style.height = "100vh";

    wrapper.appendChild(h1);
    body.appendChild(wrapper);
    toggleListeners(false);
}


function test(){
    console.log("click");
}