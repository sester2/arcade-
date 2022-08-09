// As users playing a two player game we want to:

// enter our names and have them displayed
// have our order chosen for us by the game
// take turns placing our marks in empty spaces
// not be able to place our marks in an occupied space
// be told when a move causes a player to win, or to draw
// start the game over without having to reset the browser
// As a user playing a one player game I want to:

// see the name 'Computer' displayed as my opponent
// have the Computer player make moves as if it were a human player with the correct mark in an empty space
// As a user playing a single player game I would be delighted to:

// have the Computer make 'better-than-guessing' choices when placing a mark on the board
// set the board size myself ("wider" or "taller" than 3x3)

let gameState = {
  players: ["X", "O"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "O",
  count: 1,
  gameOver: false,
};
const table = document.getElementById("board");

// window.onload = function () {
//     setGame();
// }
// add x's and o's

//     // call function to evaluate winner called this into action

// const checkDiagonal = () => {
//   for (let i = 0; i < 3; i++) {
//   if (gameState.board[2].toString() == ["X", "X", "X"]) {
//     return true;
//   } else if (gameState.board[1].toString() == ["O", "O", "O"]) {
//     return true;
//   } else {
//     return false;
//   }
// }
// };
// checkDiagonal();

const checkVertical = () => {
  for (let i = 1; i < 3; i--) {
    if (gameState.board[1].toString() == ["X", "X", "X"]) {
      return true;
    } else if (gameState.board[1].toString() == ["O", "O", "O"]) {
      return true;
    } else {
      return false;
    }
  }
};
checkVertical();

// const checkHorizontal = () => {
//   for (let i = 0; i < board.length; i++) {
//     for(let j = 1; j < board[i].length; j++) {

//       console.log(gameState.board[i][j])
//     if (
//       gameState.board[i].toString() == 'X,X,X' ||
//       gameState.board[i].toString() == 'O,O,O'
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// };

// function evaluate () =>{

//     })

//         // I want to go through the TD and look for X and O
//         // for () {

// if there are X's and O's lined up then return string winner

// if statment for X and O that maps through to see if there is a lined up winner
// Board needs to recognize that the X's and O's are aligned
// return the string winner ("WINNER")

// I want to reset the board through the rest button function fun

// const resetButton = document.getElementById("reset");
// resetButton.addEventListener("click", (event) => {
//   gameState.board = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ];
//   event.target.gameState.board =
//   gameState.currentPlayer = "O";
//   gameState.gameOver = false;
// });

// function renderHelper() {
//   //take all of gamestate.board and update all of the inner HTML's for the corresponding html element.
// }
// function evaluate() {
//   const tds = document.querySelectorAll("TD");
//   tds.forEach(function (td) {
//     console.log(td.innerText);
//   });
// }

function gamePieces(event) {
  if (gameState.count === 1 && event.target.innerText === "") {
    event.target.innerText = "O";
    gameState.board[parseInt(event.target.dataset.row)][
      parseInt(event.target.dataset.cell)
    ] = "O";
    gameState.count--;

    gameState.board[0];
  } else if (gameState.count === 0 && event.target.innerText === "") {
    event.target.innerText = "X";
    console.log(event.target.dataset.row);
    gameState.board[parseInt(event.target.dataset.row)][
      parseInt(event.target.dataset.cell)
    ] = "X";
    gameState.count++;
  }
}

// function checkWinn() {
//   if (checkHorizontal() || checkVertical() || checkDiagonal()) {
//   console.log(checkWinn)
//   return 'winner'
//   }else{

//   }
// }

table.addEventListener("click", gamePieces);
