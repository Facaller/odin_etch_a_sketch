const gridSize = 600;
let rows = 16;
let columns = 16;
isDrawing = false;

//elements
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

const blackColour = document.createElement('button');
settings.appendChild(blackColour);
blackColour.textContent = 'Black';

const rainbowColour = document.createElement('button');
settings.appendChild(rainbowColour);
rainbowColour.textContent = 'Rainbow';

rainbowColour.addEventListener('mousedown', () => {
    makeRainbow ();
})

blackColour.addEventListener('mousedown', () => {
    makeBlack();
})

changeSize.addEventListener('mousedown', () => {
    let gridNum = parseInt(prompt('Number of grid columns and rows?'));
        
    if ((gridNum >= 1) || (gridNum <= 100)) {
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
// find out about declaration const, let, blank at different locations (boolean)
            //create if statement for rainbow and black button
            cells.addEventListener('mousedown', () => {
                cells.style.background = (`${makeRainbow()}`);
                isDrawing = true;
            });
            cells.addEventListener('mousemove', () => {
                if (isDrawing) {
                    cells.style.background = (`${makeRainbow()}`);
                }
            });
            cells.addEventListener('mouseup', () => {
                if (isDrawing) {
                    cells.style.background = (`${makeRainbow()}`);
                }
                isDrawing = false;
            });
        }

        let cells = document.createElement('div');
        cells.style.width = `${(gridSize / cellNum) - 2}px`;
        cells.style.height = `${(gridSize / cellNum) - 2}px`;
        container.appendChild(cells);
        cells.classList.add("cells");
        
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
}

function replaceContainer () {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
};

function makeRainbow () {
    const hexColour = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return hexColour;
}

function makeBlack () {
    const black = cells.classList.add('blackPen');
    return black;
}

makeGrid(16, 16)