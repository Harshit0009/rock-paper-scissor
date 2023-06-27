const rock= document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result-box");

const choiceArray = ["Scissor", "Paper", "Rock"];
function choice(){
    return Math.floor(Math.random() * choiceArray.length);
}

function validateResult(computer, user){
    console.log(computer)
    if(computer === user){
        return 0;
    }
    if((computer === "Paper" && user === "Rock") || (computer === "Rock" && user === "Scissor") || (computer === "Scissor" && user === "Paper")){
        return 1;
    }
    else{
        return -1;
    }
}
function Result(computer, user){
    const wins = validateResult(computer, user);
    console.log(wins);
    if(wins === 0){
        return "Game Tie";
    }
    else if(wins === 1){
        return "Computer Won";
    }
    else if(wins === -1){
        return "User Won";
    }
}
paper.addEventListener("click", () => {
    const outputComputer = choiceArray[choice()];
    console.log(outputComputer);
    const verifyPlayerResult = Result(outputComputer, "Paper");
    console.log(verifyPlayerResult);
    computerChoice.innerHTML = outputComputer;
    userChoice.innerHTML = "Paper";
    resultDisplay.innerHTML = verifyPlayerResult;
    resultDisplay.style.display = "revert";
})

rock.addEventListener("click", () => {
  const outputComputer = choiceArray[choice()];
  console.log(outputComputer);
  const verifyPlayerResult = Result(outputComputer, "Rock");
  console.log(verifyPlayerResult);
  computerChoice.innerHTML = outputComputer;
  userChoice.innerHTML = "Rock";
  resultDisplay.innerHTML = verifyPlayerResult;
  resultDisplay.style.display = "revert";
});

scissor.addEventListener("click", () => {
  const outputComputer = choiceArray[choice()];
  console.log(outputComputer);
  const verifyPlayerResult = Result(outputComputer, "Scissor");
  console.log(verifyPlayerResult);
  computerChoice.innerHTML = outputComputer;
  userChoice.innerHTML = "Scissor";
  resultDisplay.innerHTML = verifyPlayerResult;
  resultDisplay.style.display = "revert";
});
