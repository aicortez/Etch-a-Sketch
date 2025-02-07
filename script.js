const container = document.querySelector(".container");

let pixelSize = 5
let gridX = 24
let gridY = 34
let gridSize = gridX*gridY;
for (let i = 0; i < gridSize; i++) {
    let grid = document.createElement("div")
    container.appendChild(grid)
    document.querySelector(".container").appendChild(grid)
}

container.style.width = `${pixelSize*gridX}px`
container.style.height = `${pixelSize*gridY}px`

const fullGrid = document.querySelectorAll(".container div")
fullGrid.forEach(item => {
    item.className = "grid"
    item.style.width = `${pixelSize}px`
    item.style.height = `${pixelSize}px`
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "purple"
    })
})

