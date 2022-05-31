// cria a paleta de cores
let color = ['black', 'red', 'green', 'blue'];
for(let index = 0; index < color.length; index += 1) {
    paletteCreation(color[index]); 
}

// cria painel de pixels
for(let index = 1; index <= 25; index += 1) {
    pixelBoardCreation();
}


//funções
function paletteCreation(color) {
    let colorPalette = document.getElementById('color-palette');
    let newElement = document.createElement('div');
    newElement.addEventListener('click', function(){
        let target = event.target;
        console.log(target);
        let selecao = document.getElementsByClassName('selected');
        for(let index = 0; index < selecao.length; index += 1) {
            selecao[index].classList.remove('selected');
        }
        newElement.classList.add('selected');
      });
    newElement.className = 'color';
    newElement.classList.add(color);
    colorPalette.appendChild(newElement);
    return newElement;
}

function pixelBoardCreation() {
    let pixelBoard = document.getElementById('pixel-board');
    let newElement = document.createElement('div');
    newElement.className = 'pixel';
    pixelBoard.appendChild(newElement);
}