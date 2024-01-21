const container = document.createElement('div');
document.body.appendChild(container);

function makeRows (rowNum, columnNum) {
    for (r = 0; r < rowNum; r++) {
        for (c = 1; c < columnNum; c++) {
            let column = document.createElement('div')
            container.appendChild(column);
            column.textContent = 'test2'
        }
        let row = document.createElement('div');
        container.appendChild(row);
        row.textContent = 'test';
    }
}

makeRows(16, 16)