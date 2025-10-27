let tiles = document.querySelectorAll(".cell")
let playerTurn = 1

tiles.forEach((element) =>{
    element.addEventListener("click", () => {   
        if (playerTurn == 1){
            playerTurn = 2
            element.style.backgroundColor = 'blue';
        } else {
            playerTurn = 1
            element.style.backgroundColor = 'red';
        }
    })
})