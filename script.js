// cria a paleta de cores
let color = ['black', 'red', 'green', 'blue'];
for (let index = 0; index < color.length; index += 1) {
    if(color[index] === 'black') {
        paletteCreation(color[index]).classList.add('selected');
    } else {
        paletteCreation(color[index]);
    }
}

// cria painel de pixels
for (let index = 1; index <= 25; index += 1) {
    pixelBoardCreation().id = index;
}


//funções
function paletteCreation(color) {
    let colorPalette = document.getElementById('color-palette');
    let newElement = document.createElement('div');
    newElement.addEventListener('click', function () {
        let selecao = document.getElementsByClassName('selected');
        for (let index = 0; index < selecao.length; index += 1) {
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
    newElement.addEventListener('click', function(event) {
        let target = event.target;
        let selectedColor = document.getElementsByClassName('selected');
        let cor;
        for(let item of selectedColor){
            cor = item;
        }
        let objCss = window.getComputedStyle(cor);
        let bgColor = objCss.getPropertyValue('background-color'); 
        newElement.style.backgroundColor = bgColor;        
    })
    newElement.className = 'pixel';
    pixelBoard.appendChild(newElement);
    return newElement;
}

function clearBorad() {
    let pixel = document.getElementsByClassName('pixel');
    let arrayPixel;
    for(let item of pixel){
        arrayPixel = item;
        arrayPixel.style.backgroundColor = 'white';
    }
}