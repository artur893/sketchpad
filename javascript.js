const board = document.querySelector(".board")
const button = document.querySelectorAll("button")

console.log(button)

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

function createBoard(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (i = 0; i < size * size; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        block.style.backgroundColor = "rgb(169, 161, 140)"
        board.appendChild(block)
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = "red"
        })
    }
}

createBoard(16)

function changeSize(value) {
    if (value <= 100 && value >= 2) {
        let block = board.querySelectorAll("div")
        block.forEach((div) => div.remove())
        createBoard(value)
    }
    else {
        alert("ERROR! Input should be betwen 2 and 100")
    }
}

const reset = document.getElementById("reset")
reset.addEventListener("click", () => {
    changeSize(64)
})


