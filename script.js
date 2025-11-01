const grid = document.querySelector('#grid');
const reformGridBtn = document.querySelector('#reform-grid-btn');
const colorInput = document.querySelector('#color-input');
const randomColoring = document.querySelector('#random-coloring');
const toggleColoringBtn = document.querySelector('#toggle-coloring-btn');
let isColoring = true;
function toggleColoring(){
    isColoring = !isColoring;
    toggleColoringBtn.textContent = isColoring ?
    'Stop coloring' :
    'Start Coloring';
}
function colorDiv(event){
    if(!isColoring)return;
    const div = event.target;
    const isRandomColoringOn = randomColoring.checked;
    let divColor;
    if(isRandomColoringOn){   
        divColor = `rgb(${(Math.random()*256)},
        ${(Math.random()*256)},
        ${(Math.random()*256)}`;
    }
    else{;
        divColor = colorInput.value;
    }
    div.style.backgroundColor = divColor;
}
function formGrid(squares){
    grid.replaceChildren('');
    for(let i = 0; i<squares*squares; i++){
    const div = document.createElement('div');
    div.addEventListener('mouseenter',colorDiv);
    grid.appendChild(div);
}
}
formGrid(16);
reformGridBtn.addEventListener('click', () => {
    let squares = +prompt('How many squares per side do you want now? (max 100x100 cuz performance)');
    if(squares > 100)squares = 100;
    formGrid(squares);
})
toggleColoringBtn.addEventListener('click', toggleColoring);