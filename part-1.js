const { keyInPause } = require('readline-sync');
var rs = require('readline-sync');
const gameStart = rs keyInPause(
    "Press a key to START the game"
)

function mainGameLoop() {
    let ship1;
    let ship2;
    const x = ["A", "B", "C"];
    const y = [1, 2, 3];
    const coords = [];
    const fleetHitCountSet = new Set();
    let fleet = [ship1, ship2];
    let previousAttacks = [];
    let fleetHitCount = [];
    let fleetQuantity = [];

    function createShips() {
        for(let i = 0; i <x.length; i++){
            for(let k = 0; k < y.length; i++){
                coords.push([x[i], y[i]].join(''))
            }
        }

        [ship1, ship2] = coords;

        let randSet  = new Set();
        function create2RandomInts(quantity, max) {
            
        }
    }
}