let currentPlayer = "X";
let arr = Array(9).fill(null)//array of 9 length all null value
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const result = document.querySelector("#result")
const boxes=document.querySelectorAll(".container_grid_column")

function checkWinner() {
    for (let [a, b, c] of winningCombinations) {
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      result.innerText = `Winner is ${arr[a]}`;
      result.style.visibility = "visible";
      return true;
    }
  }
  return false;
}
function checkDraw(){
  if (!arr.includes(null)) {
    result.innerText = "Game is Draw!";
    result.style.visibility = "visible";
    return true;
  }
  return false;
}
function resetGame(){
    console.log("reset")
    boxes.forEach(box=>(box.innerText=""));
    result.style.visibility="hidden";
    currentPlayer="X";
    gameOver=false;
}
let gameOver=false;
function handleClick(el) {
    if(gameOver) {
        return
    }
    console.log(el.id);
    const id = Number(el.id);
    if(arr[id] !== null) return
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    if(checkWinner()){
        gameOver=true;
        return 
    }
    currentPlayer = currentPlayer == "X" ? "O" : "X";
}