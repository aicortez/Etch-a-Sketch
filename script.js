const container = document.querySelector(".container")

let pixelSize = 8
let gridX = 16
let gridY = 16
let gridSize = gridX*gridY;

function clearGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
}

function createGrid() {
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
            let red = Math.floor(Math.random() * 255)
            let green = Math.floor(Math.random() * 255)
            let blue = Math.floor(Math.random() * 255)
            item.style.backgroundColor = `rgb(${red},${green},${blue})`
        })
    })
}

createGrid()




// function populateGrid() {
//     container.style.width = `${pixelSize*gridX}px`
//     container.style.height = `${pixelSize*gridY}px`
//     const fullGrid = document.querySelectorAll(".container div")
//     fullGrid.forEach(item => {
//     item.className = "grid"
//     item.style.width = `${pixelSize}px`
//     item.style.height = `${pixelSize}px`
//     item.addEventListener("mouseover", () => {
//         item.style.backgroundColor = "purple"
//     })
// })
// }
// populateGrid()

const newGridButton = document.querySelector(".new-grid")
newGridButton.addEventListener("click", () => {
    clearGrid()
    gridX = prompt("Please enter width size:")
    while (gridX > 100 || gridX < 1) {
        gridX = prompt("Width must be between 1 and 100:")
    }
    gridY = prompt("Please enter length size:")
    while (gridY > 100 || gridY < 1) {
        gridY = prompt("Length must be between 1 and 100:")
    }
    gridSize = gridX*gridY
    createGrid()
})