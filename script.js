const gridSize = 600;
let rows = 16;
let columns = 16;

const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add("container");
container.style.width = `${gridSize}px`;
container.style.height = `${gridSize}px`;

const settings = document.createElement('div');
document.body.appendChild(settings);

const changeSize = document.createElement('button');
settings.appendChild(changeSize);
changeSize.textContent = 'Change Size';

changeSize.addEventListener('mousedown', () => {
    let gridNum = parseInt(prompt('Number of grid columns and rows?'));
        
    if ((gridNum >= 1) || (gridNum <= 100)) {
        // spend some time understanding this section 
        replaceContainer()
        makeGrid(gridNum, gridNum)
    } else { ((gridNum > 100 ) || (gridNum < 1)) 
        alert('Please enter a number between 1 and 100.')
    }
});

function makeGrid (cellNum) {
    for (let r = 0; r < cellNum; r++) {

        for (let c = 1; c < cellNum; c++) {
            let cells = document.createElement('div')
            cells.style.width = `${(gridSize / cellNum) - 2}px`;
            cells.style.height = `${(gridSize / cellNum) - 2}px`;
            container.appendChild(cells);
            cells.classList.add("cells")
        
            isDrawing = false;

            cells.addEventListener('mousedown', () => {
                cells.classList.add('blackPen');
                isDrawing = true;
            });
            cells.addEventListener('mousemove', () => {
                if (isDrawing) {
                    cells.classList.add('blackPen');
                }
            });
            cells.addEventListener('mouseup', () => {
                if (isDrawing) {
                    cells.classList.add('blackPen');
                }
                isDrawing = false;
            });
        }

        let cells = document.createElement('div');
        cells.style.width = `${(gridSize / cellNum) - 2}px`;
        cells.style.height = `${(gridSize / cellNum) - 2}px`;
        container.appendChild(cells);
        cells.classList.add("cells")
        

        cells.addEventListener('mouseover', () => {
            cells.style.backgroundColor = 'black';
        });
        cells.addEventListener('mouseout', () => {
            cells.style.backgroundColor = '';
        });
    }
}

function replaceContainer () {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
};

makeGrid(16, 16)