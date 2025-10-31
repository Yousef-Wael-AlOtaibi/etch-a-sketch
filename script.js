const grid = document.querySelector('#grid');
const reformGridBtn = document.querySelector('#reform-grid-btn');
function colorDiv(event){
    const div = event.target;
    const randomColor = `rgb(${(Math.random()*256)},
    ${(Math.random()*256)},
    ${(Math.random()*256)}`;
    div.style.backgroundColor = randomColor;
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