let tiles = document.querySelectorAll(".cell")

tiles.forEach((element) =>{
    element.addEventListener("click", () => {   
        element.style.backgroundColor = 'blue';
    })
})