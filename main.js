const container = document.querySelector('.container');
const box = document.querySelector('.box');
const controls = document.querySelector('.controls');
const dropMenu = document.querySelector('#grid-size');

// Creates 1-100 in drop down menu <option>
for (let i = 1; i < 101; i++) {
    const sizeSelection = document.createElement('option');
    sizeSelection.textContent = i;
    dropMenu.appendChild(sizeSelection);
}

// Grid
function createGrid() {
    let gridNum = dropMenu.addEventListener('click', gridSize());
    for (let i = 0; i < gridNum; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        box.appendChild(row);
        for (let j = 0; j < gridNum; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);                
        }                
    }
}

// Size of grid
// Label: 'Choose size of canvas'
// Select: up to 100 options...

// When I click option #, it should go to gridNum:
// dropMenu.addEventListener('click', gridSize());

function gridSize() { 
    return dropMenu.textContent;        
} console.log(gridSize());

// Change size of grid
// sizeSelection.addEventListener('click', () => {
//     createGrid();    
// })
