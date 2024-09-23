let moves = ["rock","paper","scissor"]

function getComputerChoice()
{
    return moves[Math.floor(Math.random()*3)]
}

function getHumanChoice(){
    return prompt("Enter your move")
}