let color = ['black', 'red', 'green', 'blue'];

for(let index = 0; index < color.length; index += 1) {
    paletteCreation(color[index]);
}

function paletteCreation(color) {
    let colorPalette = document.getElementById('color-palette');
    let newElement = document.createElement('div');
    newElement.className = 'color';
    newElement.classList.add(color);
    colorPalette.appendChild(newElement);

}
    