let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector("#reset");
let turnO = true;
let msgCont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg")

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];


const resetGame = () => {
  turn0 = true; 
  msgCont.classList.add("hide");
  EnableBox();
  
}
boxes.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    if (turnO) {
      boxes.innerText = "O";
      turnO = false;
    } else {
      boxes.innerText = "X";
      turnO = true;
    }
    boxes.disabled = true;
    checkwinner();
  });
});

const EnableBox = () => {
  for(const box of boxes){
    box.innerText = "";
    box.disabled = false;
  }
}
const BlockBox = () => {
  for(const box of boxes){
    box.disabled = true;
  }
}

const showWinner = (winner) => {
    msg.innerText = ` Congratulations , winner is ${winner} `;
    msgCont.classList.remove("hide");
    BlockBox();
}

const checkwinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner - ",pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};


reset.addEventListener("click", resetGame);