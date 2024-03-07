const gridSize = 600;
let rows = 16;
let columns = 16;
isDrawing = false;
let drawBlack = true;
let drawRainbow = false;


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

const clearButton = document.createElement('button');
settings.appendChild(clearButton);
clearButton.textContent = 'Clear';

rainbowColour.addEventListener('mousedown', () => {
    drawRainbow = true;
    drawBlack = false;
})

blackColour.addEventListener('mousedown', () => {
    drawBlack = true;
    drawRainbow = false;
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
            cells.setAttribute('id','cellsRef')
            cells.style.width = `${(gridSize / cellNum) - 2}px`;
            cells.style.height = `${(gridSize / cellNum) - 2}px`;
            container.appendChild(cells);
            cells.classList.add("cells")
            
            clearButton.addEventListener('click', () => {
                cells.style.background = ''
                container.style.background = ''
            });
// find out about declaration const, let, blank at different locations (boolean)
            
            cells.addEventListener('mousedown', () => {
                
                if (isDrawing) {
                    if (drawBlack) {
                        cells.style.background = makeBlack();    
                    } else if (drawRainbow) {
                        cells.style.background = makeRainbow();
                    }
                }
                isDrawing = true;
            });
            cells.addEventListener('mousemove', () => {
                if (isDrawing) {
                    if (drawBlack) {
                        cells.style.background = makeBlack();    
                    } else if (drawRainbow) {
                        cells.style.background = makeRainbow();
                    } 
                }
            });
            cells.addEventListener('mouseup', () => {
                
                if (isDrawing) {
                    if (drawBlack) {
                        cells.style.background = makeBlack();    
                    } else if (drawRainbow) {
                        cells.style.background = makeRainbow();
                    }
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
                
                if (isDrawing) {
                    if (drawBlack) {
                        cells.style.background = makeBlack();    
                    } else if (drawRainbow) {
                        cells.style.background = makeRainbow();
                    }
                }
                isDrawing = true;
            });
            cells.addEventListener('mousemove', () => {
                if (isDrawing) {
                    if (drawBlack) {
                        cells.style.background = makeBlack();    
                    } else if (drawRainbow) {
                        cells.style.background = makeRainbow();
                    } 
                }
            });
            cells.addEventListener('mouseup', () => {
                
                if (isDrawing) {
                    if (drawBlack) {
                        cells.style.background = makeBlack();    
                    } else if (drawRainbow) {
                        cells.style.background = makeRainbow();
                    }
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
    const black = '#000000'
    return black;
}

makeGrid(16)