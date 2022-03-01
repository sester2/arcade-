// Set up Game Data gamestate (the data we need to keep track of)

// Write Functions to manipulate the gamestate

// We need to put stuff on the screen 
// Make the tic tac toe board 'look at WakeAMole or Pixalet for structure' 

// Connect the screen with the button functions and gamedata so they can interact 

//let board;
// let playerO = 'O';
// let playerX = 'X';
let currentPlayer = 'O';
let gameOver = false;
const table = document.getElementById('board')

// window.onload = function () {
//     setGame();
// }
// add x's and o's

function gamePieces(event) {
    event.target.innerText = currentPlayer


    if (currentPlayer === 'O') {
        currentPlayer = 'X';
    } else {
        currentPlayer = 'O';
    }


}
// addd eventlistner on click 
table.addEventListener('click', gamePieces)


