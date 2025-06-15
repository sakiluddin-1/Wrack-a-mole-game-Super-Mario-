window.onload = function () {
    setGame();
}
let score = 0;
let gameOver = false;
function setGame() {
    for(let i = 0; i < 9; i ++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", setTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 2000);
    setInterval(setPlant, 3000);
}

let currentMoleTile;

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if(gameOver) {
        return;
    }

    if(currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.style.cursor = "pointer";
    mole.src = "images/monty-mole.png";
    let num = getRandomTile();
    if(currrentPlantTile && currrentPlantTile.id == num) {
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

let currrentPlantTile;

function setPlant() {
    if(gameOver) {
        return;
    }

    if(currrentPlantTile) {
        currrentPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "images/piranha-plant.png";
    let num = getRandomTile();
    if(currentMoleTile && currentMoleTile.id == num){
        return;
    }
    currrentPlantTile = document.getElementById(num);
    currrentPlantTile.appendChild(plant);
}

function setTile () {
    if(gameOver) {
        return;
    }
    if(this == currentMoleTile) {
        score = score + 10;
        console.log(score);
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currrentPlantTile) {
        document.getElementById("score").innerText = "Game Over : " + score.toString();
        gameOver = true;
    }
}