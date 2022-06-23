const board = document.querySelector(".board")

function createBoard(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (i = 0; i < size * size; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        block.style.backgroundColor = "green"
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


