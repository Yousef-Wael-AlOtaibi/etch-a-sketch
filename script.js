const grid = document.querySelector('#grid');
const gridSizes = {
    small:{
        width:352,
        height:352,
        squares:16,
    },
    medium:{
        width:512,
        height:352,
        squares:24,
    },
    large:{
        width:768,
        height:352,
        squares:32,
    },
    'extra-large':{
        width:960,
        height:352,
        squares:38,
    }
}
const sizeBtns = document.querySelector('#grid-sizes').children;
[...sizeBtns].forEach(btn=>btn.addEventListener('click',()=>{
    sizeGrid(gridSizes[btn.value]);
    formGrid(gridSizes[btn.value].squares);
}))
const reformGridBtn = document.querySelector('#reform-grid-btn');
const colorInput = document.querySelector('#color-input');
const randomColoring = document.querySelector('#random-coloring');
const toggleColoringBtn = document.querySelector('#toggle-coloring-btn');
let isColoring = true;
function sizeGrid(size){
    grid.style.width = `${size.width}px`;
    grid.style.height =  `${size.height}px`;
}
function toggleColoring(){
    isColoring = !isColoring;
    toggleColoringBtn.textContent = isColoring ?
    'Stop coloring' :
    'Start Coloring';
    toggleColoringBtn.classList.toggle('green-btn')
    toggleColoringBtn.classList.toggle('red-btn')
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
    for(let i = 0; i<squares; i++){
        const parentDiv = document.createElement('div');
        parentDiv.classList.add('parent')
        for(let j = 0; j<squares; j++){
            const div = document.createElement('div');
            div.addEventListener('mouseenter',colorDiv);
            parentDiv.appendChild(div);
        }
        grid.appendChild(parentDiv);
    }
}
formGrid(16);
reformGridBtn.addEventListener('click', () => {
    let squares = +prompt('How many squares per side do you want now? (max 100x100 cuz performance)');
    if(squares > 100)squares = 100;
    if(!squares)return;
    formGrid(squares);
})
toggleColoringBtn.addEventListener('click', toggleColoring);
document.addEventListener('keydown',(e)=>{
    if(e.key === 't'){
        toggleColoring();
    }
    if(e.key === 'r'){
        randomColoring.checked = !randomColoring.checked;
    }
    if(e.key === 'c'){
        colorInput.showPicker();
    }
})