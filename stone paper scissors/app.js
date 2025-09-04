let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg"); 

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You won! your ${userChoice} beats the ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        CompScorePara.innerText = compScore;
        console.log("You lost");
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const DrawGame = () => {
    console.log("It's a DRAW");
    msg.innerText = "Its a DRAW";
    msg.style.backgroundColor = "purple";
};

const genCompChoice = () => {
    // rock paper scissor 
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice 
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);
   
    if(userChoice === compChoice){
        DrawGame();
    } else {
        let userWin;
        if(userChoice === "rock") {
            //scissors paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
} )