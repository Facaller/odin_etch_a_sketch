const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add("container");

const grid = document.createElement('div');
container.appendChild(grid);
grid.classList.add("grid");

function makeGrid (rowNum, columnNum) {
    for (let r = 0; r < rowNum; r++) {

        for (let c = 1; c < columnNum; c++) {
            let column = document.createElement('div')
            grid.appendChild(column);
            column.classList.add("column")
            

            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = 'black';
            });
            column.addEventListener('mouseout', () => {
                column.style.backgroundColor = '';
            });
        }

        let row = document.createElement('div');
        grid.appendChild(row);
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