const container = document.querySelector('.container');
const box = document.querySelector('.box');
const controls = document.querySelector('.controls');
const dropMenu = document.querySelector('#grid-size');

// Grid
function createGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        box.appendChild(row);
        for (let j = 0; j < 16; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);                
        }                
    }
} createGrid();

// Size of grid
// Label: 'Choose size of canvas'
// Select: up to 100 options...
for (let i = 0; i < 100; i++) {
    const sizeSelection = document.createElement('option');
    sizeSelection.value = ; // ???
    dropMenu.appendChild(sizeSelection);
}
