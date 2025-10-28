let tiles = document.querySelectorAll(".cell")
let playerTurn = 1

tiles.forEach((el, i) => el.dataset.index = i)

let board = Array(9).fill(null);

tiles.forEach((element, i) =>{
    element.addEventListener("click", () => {   
        if (playerTurn == 1){
            playerTurn = 2
            element.innerHTML = 'X';
            i = "X"
            board[i] = "X"
           console.log(board[i])
        } else {
            playerTurn = 1
            element.innerHTML = 'O';
            board[i] = "O"
            console.log(board[i])
        }
    })
})