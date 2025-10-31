const grid = document.querySelector('#grid');
function colorDiv(event){
    const div = event.target;
    const randomColor = `rgb(${(Math.random()*256)+1},
    ${(Math.random()*256)+1},
    ${(Math.random()*256)+1}`;
    div.style.backgroundColor = randomColor;
}
for(let i = 0; i<256; i++){
    const div = document.createElement('div');
    div.addEventListener('mouseenter',colorDiv);
    grid.appendChild(div);
}
