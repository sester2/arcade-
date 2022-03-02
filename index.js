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

let currentPlayer = 'O';
let count = 'X'
let gameOver = false;
const table = document.getElementById('board')

// window.onload = function () {
//     setGame();
// }
// add x's and o's

function gamePieces(event) {
    //console.log( event.target.nodeName)
    if (currentPlayer === 'O' && event.target.nodeName === 'TD') {

        currentPlayer = 'X';
        event.target.innerText = currentPlayer
    } else if (currentPlayer === 'X' && event.target.nodeName === 'TD') {

        currentPlayer = 'O';
        event.target.innerText = currentPlayer
    }
    // call function to evaluate winner calls this into action 

}
function fun() {
    document.getElementById("but").innerHTML = "test";

}
table.addEventListener('click', gamePieces)



