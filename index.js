const gridEl = document.getElementById("grid")

function makeRows(rows, cols) {
    gridEl.style.setProperty('--grid-rows', rows)
    gridEl.style.setProperty('--grid-colsl', cols)
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div")
        cell.innerText = (i + 1)
        gridEl.appendChild(cell).className = "grid-item"
    }
}

makeRows(16, 16)