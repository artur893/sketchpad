const board = document.querySelector(".board")
const button = document.querySelectorAll("button")
const colorPicker = document.getElementById("colorPicker")

//highligting buttons
button[0].addEventListener("mouseover", () => {
    button[0].classList.add("translated")
})

button[0].addEventListener("mouseout", () => {
    button[0].classList.remove("translated")
})

button[1].addEventListener("mouseover", () => {
    button[1].classList.add("translated")
})

button[1].addEventListener("mouseout", () => {
    button[1].classList.remove("translated")
})

button[2].addEventListener("mouseover", () => {
    button[2].classList.add("translated")
})

button[2].addEventListener("mouseout", () => {
    button[2].classList.remove("translated")
})

button[3].addEventListener("mouseover", () => {
    button[3].classList.add("translated")
})

button[3].addEventListener("mouseout", () => {
    button[3].classList.remove("translated")
})

//clicked color

button[0].addEventListener("click", () => {
    button[0].classList.add("clicked")
    button[1].classList.remove("clicked")
    button[2].classList.remove("clicked")
    currentMode = "color"
})

button[1].addEventListener("click", () => {
    button[1].classList.add("clicked")
    button[0].classList.remove("clicked")
    button[2].classList.remove("clicked")
    currentMode = "rainbow"
})

button[2].addEventListener("click", () => {
    button[2].classList.add("clicked")
    button[0].classList.remove("clicked")
    button[1].classList.remove("clicked")
    currentMode = "eraser"
})




//setting color and mode
let currentColor = "black"
let newColor
let currentMode = "color"

function setCurrentColor(newColor) {
    currentColor = newColor
}

colorPicker.oninput = (e) => setCurrentColor(e.target.value)

function changeColor(e) {
    if (currentMode === "color") {
        e.target.style.backgroundColor = currentColor
    }

    else if (currentMode === "rainbow") {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`

    }
    else if (currentMode === "eraser") {
        e.target.style.backgroundColor = "rgb(169, 161, 140)"
    }
}

//coloring & creating blocks
function createBoard(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (i = 0; i < size * size; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        block.style.backgroundColor = "rgb(169, 161, 140)"
        board.appendChild(block)
        block.addEventListener("mouseover", changeColor)
    }
}

createBoard(16)

//change size of board
function changeSize(value) {
    if (value <= 100 && value >= 2) {
        let block = board.querySelectorAll("div")
        block.forEach((div) => div.remove())
        createBoard(value)
    }
    else {
        alert("Input should be betwen 2 and 100")
    }
}

const reset = document.getElementById("reset")
reset.addEventListener("click", () => {
    changeSize(64)
})


