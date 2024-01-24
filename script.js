const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add("container")

function makeGrid (rowNum, columnNum) {
    for (r = 0; r < rowNum; r++) {
        for (c = 1; c < columnNum; c++) {
            let column = document.createElement('div')
            container.appendChild(column);
            column.classList.add("column")

            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = 'black';
            });
            column.addEventListener('mouseout', () => {
                column.style.backgroundColor = '';
            });
        }
        
        let row = document.createElement('div');
        container.appendChild(row);
        row.classList.add("row")

        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = 'black';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '';
        });
    }
}

makeGrid(16, 16)