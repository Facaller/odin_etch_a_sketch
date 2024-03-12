const gridSize = 600;
let rows = 16;
let columns = 16;
isDrawing = false;
let drawBlack = true;
let drawRainbow = false;
let drawOpaque = false;


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

const opacity = document.createElement('button');
settings.appendChild(opacity);
opacity.textContent = 'Opacity';

rainbowColour.addEventListener('click', () => {
    drawRainbow = true;
    drawBlack = false;
});

blackColour.addEventListener('click', () => {
    drawBlack = true;
    drawRainbow = false;
});

opacity.addEventListener('click', () => {
    drawOpaque = true;
    console.log('this works');
});

changeSize.addEventListener('click', () => {
    let gridNum = parseInt(prompt('Number of grid columns and rows?'));
        
    if ((gridNum >= 1) && (gridNum <= 100)) {
        replaceContainer()
        makeGrid(gridNum)
    } else {
        alert('Please enter a number between 1 and 100.')
    }
});

function makeGrid (cellNum) {
    for (let r = 0; r < cellNum; r++) {
        
        clearButton.addEventListener('click', () => {
            cells.style.background = ''
        });
        
        for (let c = 1; c < cellNum; c++) {
            let cells = document.createElement('div')
            cells.setAttribute('id','cellsRef')
            cells.style.width = `${(gridSize / cellNum) - 2}px`;
            cells.style.height = `${(gridSize / cellNum) - 2}px`;
            container.appendChild(cells);
            cells.classList.add("cells")
            
            clearButton.addEventListener('click', () => {
                cells.style.background = ''
            }); 

            let opaqueCells = parseFloat(cells.style.opacity) - 0.1
            
            // idea here was get variable for makeBlack() - cells.opacity
            // then += every time mouseover to darken with each event.
            
// find out about declaration const, let, & blank at different locations (boolean)
            cells.addEventListener('dragstart', (e) => {
                e.preventDefault();
            });
            cells.addEventListener('mousedown', () => {
                if (isDrawing) {
                    if (drawOpaque) {
                        if (drawBlack) {
                            cells.style.background = makeBlack()
                            opaqueCells += opaqueCells
                            
                        } else if (drawRainbow) {
                            cells.style.background = makeRainbow()
                            opaqueCells += opaqueCells
                            
                        }    
                    }
                    else if (drawBlack) {
                        cells.style.background = makeBlack();    
                    } else if (drawRainbow) {
                        cells.style.background = makeRainbow();
                    }
                }
                isDrawing = true;
            });
            cells.addEventListener('mousemove', () => {
                if (isDrawing) {
                    if (drawOpaque) {
                        if (drawBlack) {
                            cells.style.background = makeBlack()
                            opaqueCells += opaqueCells
                            
                        } else if (drawRainbow) {
                            cells.style.background = makeRainbow()
                            opaqueCells += opaqueCells
                            
                        }    
                    }
                    if (drawBlack) {
                        cells.style.background = makeBlack();    
                    } else if (drawRainbow) {
                        cells.style.background = makeRainbow();
                    } 
                }
            });
            cells.addEventListener('mouseup', () => {
                if (isDrawing) {
                    if (drawOpaque) {
                        if (drawBlack) {
                            cells.style.background = makeBlack()
                            opaqueCells += opaqueCells
                            
                        } else if (drawRainbow) {
                            cells.style.background = makeRainbow()
                            opaqueCells += opaqueCells
                            
                        }    
                    }
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
        
        cells.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

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

// shading function from a completed project

// function RGBToHex(rgb) {
//     // Choose correct separator
//     let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
//     // Turn "rgb(r,g,b)" into [r,g,b]
//     rgb = rgb.substr(4).split(')')[0].split(sep);
  
//     let r = (+rgb[0]).toString(16),
//       g = (+rgb[1]).toString(16),
//       b = (+rgb[2]).toString(16);
  
//     if (r.length == 1) r = '0' + r;
//     if (g.length == 1) g = '0' + g;
//     if (b.length == 1) b = '0' + b;
//     b = (+rgb[2]).toString(16);
  
//     if (r.length == 1) r = '0' + r;
//     if (g.length == 1) g = '0' + g;
//     if (b.length == 1) b = '0' + b;
//     return '#' + r + g + b;
//   }