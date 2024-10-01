function runGame() {
    console.log("Game is starting");
    createMissile();
    let playerValue = selectPlayerMode();
    if (playerValue = "single") {
        console.log("welcome to single player mode:")
    }
}


function createMissile() {
    console.log("missile created...");
}

function selectPlayerMode() {
    let userResponse = prompt("choose single player or multiplayer:");
    return userResponse;

}

//Executable

runGame();
