const grid = document.querySelector('#grid');
function colorDiv(event){
    const div = event.target;
    const randomColor = `rgb(${(Math.random()*256)+1},
    ${(Math.random()*256)+1},
    ${(Math.random()*256)+1}`;
    div.style.backgroundColor = randomColor;
}
function cleanDiv(event){
    console.log('Left div')
    const div = event.target;
    div.style.backgroundColor = 'white';
}
grid.addEventListener('mouseenter',colorDiv);
grid.addEventListener('mouseleave',cleanDiv);
for(let i = 0; i<256; i++){
    const div = document.createElement('div');
    grid.appendChild(div);
}
