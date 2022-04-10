var rs = require('readline-sync');

// PROMPT PRESS ANY KEY

let anyKey = rs.keyInPause("Press any key to start...")

function createGameBoard() {
    let gameBoard = [[1, 2, 3], ['A', 'B', 'C']];
    return gameBoard;
}

console.log(createGameBoard())

function shipLocation(col, row) {
    let col = Math.floor(Math.random() * 3) + 1;
    
    console.log(gameBoard[0].length)

// INSERT RANDOM NUMBER GENERATOR SOMEHOW TO GET A RANDOM COL VALUE
// (1, 2, OR 3) AND A RANDOM ROW VALUE (A, B, OR C) 

let col = gameBoard[0];
let row = gameBoard[1]

const ship = {
    isHit: false,
    size: 1,
    shipLocation: shipLocation(col, row), 
}

console.log(ship())
let ship1 = new ship();
let ship2 = new ship();

// PLACE SHIPS ON BOARD

// PROMPT ENTER LOCATION TO STRIKE (COL, ROW)

// If there is a ship at that location the prompt will read, 
//"Hit. You have sunk a battleship. 1 ship remaining."

// If there is not a ship at that location the prompt will 
// read, "You have missed!"

// If you enter a location you have already guessed the prompt 
// will read, "You have already picked this location. Miss!"

//When both of the battleships have been destroyed the prompt will 
// read, "You have destroyed all battleships. Would you like to play 
//again? Y/N"

// If "Y" is selected the game starts over. If "N" then the application 
// ends itself.
}