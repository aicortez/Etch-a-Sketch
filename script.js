const container = document.querySelector(".container");

let gridX = 16
let gridY = 16
let gridSize = gridX*gridY;
for (let i = 0; i < gridSize; i++) {
    let grid = document.createElement("div")
    container.appendChild(grid)
    document.querySelector("div").appendChild(grid)
}

container.style.width = `${gridX*gridY}px`
container.style.height = `${gridX*gridY}px`

const fullGrid = document.querySelectorAll(".container div")
fullGrid.forEach(item => {
    item.className = "grid"
    item.style.width = `${gridX}px`
    item.style.height = `${gridY}px`
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "purple"
    })
})