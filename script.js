// cria a paleta de cores
let color = ['black', 'red', 'green', 'blue'];
for(let index = 0; index < color.length; index += 1) {
    paletteCreation(color[index]);
}

// cria painel de pixels

for(let index = 1; index <= 25; index += 1) {
    pixelCreation();
}



function paletteCreation(color) {
    let colorPalette = document.getElementById('color-palette');
    let newElement = document.createElement('div');
    newElement.className = 'color';
    newElement.classList.add(color);
    colorPalette.appendChild(newElement);
}

function pixelCreation() {
    let pixelBoard = document.getElementById('pixel-board');
    let newElement = document.createElement('div');
    newElement.className = 'pixel color';
    pixelBoard.appendChild(newElement);
}