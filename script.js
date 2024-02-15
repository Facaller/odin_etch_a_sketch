const gridSize = 600;
let rows = 16;
let columns = 16;

const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add("container");
container.style.width = `${gridSize}px`;
container.style.height = `${gridSize}px`;

let newContainer = container;
newContainer.setAttribute("id","newCon");

const settings = document.createElement('div');
document.body.appendChild(settings);

const changeSize = document.createElement('button');
settings.appendChild(changeSize);
changeSize.textContent = 'Change Size';

changeSize.addEventListener('mousedown', () => {
    let gridNum = parseInt(prompt('Number of grid columns and rows?'));
        
    if ((gridNum >= 1) || (gridNum <= 100)) {
        let newCon = document.querySelector("#newCon")
        let clone = newCon.cloneNode(true);
        
        container.replaceWith(clone);
        makeGrid(gridNum, gridNum)
    } else { ((gridNum > 100 ) || (gridNum < 1)) 
        alert('Please enter a number between 1 and 100.')
    }
});

function makeGrid (rows, columns) {
    for (let r = 0; r < rows; r++) {

        for (let c = 1; c < columns; c++) {
            let gridColumn = document.createElement('div')
            gridColumn.style.width = `${(gridSize / rows) - 2}px`;
            gridColumn.style.height = `${(gridSize / columns) - 2}px`;
            container.appendChild(gridColumn);
            gridColumn.classList.add("column")
            

            gridColumn.addEventListener('mouseover', () => {
                gridColumn.style.backgroundColor = 'black';
            });
            gridColumn.addEventListener('mouseout', () => {
                gridColumn.style.backgroundColor = '';
            });
        }

        let gridRow = document.createElement('div');
        gridRow.style.width = `${(gridSize / rows) - 2}px`;
        gridRow.style.height = `${(gridSize / columns) - 2}px`;
        container.appendChild(gridRow);
        gridRow.classList.add("row")
        

        gridRow.addEventListener('mouseover', () => {
            gridRow.style.backgroundColor = 'black';
        });
        gridRow.addEventListener('mouseout', () => {
            gridRow.style.backgroundColor = '';
        });
    }
}

makeGrid(16, 16)