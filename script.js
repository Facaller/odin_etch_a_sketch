const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add("container")

function makeRows (rowNum, columnNum) {
    for (r = 0; r < rowNum; r++) {
        for (c = 1; c < columnNum; c++) {
            let column = document.createElement('div')
            container.appendChild(column);
            column.classList.add("column")
        }
        let row = document.createElement('div');
        container.appendChild(row);
        row.classList.add("row")
    }
}

makeRows(16, 16)