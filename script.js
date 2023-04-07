let currentSchema = 'colour'
let currentColor = '#000000';
let size = 16;
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

document.getElementById('colourSelection').oninput = (e) => currentColor = e.target.value;
document.getElementById('draw').onclick = () => currentSchema = 'colour';
document.getElementById('rgbButton').onclick = () => currentSchema = 'random';
document.getElementById('eraser').onclick = () => currentSchema = 'erase';
document.getElementById('reset').onclick = () => reset();
document.getElementById('slider').onmousemove = (e) => updateValue(e.target.value);
document.getElementById('slider').onchange = (e) => updateBoard(e.target.value);

function updateValue(size){
  document.getElementById('size').innerHTML = `${size} x ${size}`;
}

function updateBoard(e){
  size = e;
  document.getElementById('grid').innerHTML = '';
  createGrid(size);
}

function reset(){
  document.getElementById('grid').innerHTML = '';
  document.getElementById('slider').value = 16;
  size = 16;
  document.getElementById('size').innerHTML = `${size} x ${size}`;
  createGrid(size);
}


function createGrid(size){
  var element = document.getElementById("grid");
  var width = 720/size;
  for(let i = 0; i < size; i++){
    var row = document.createElement('div');
    row.className = 'row';
    for(let j = 0; j < size; j++){
      var cell = document.createElement('div');
      cell.className = 'square';
      cell.style.width = `${width}px`;
      cell.style.height = `${width}px`;
      cell.addEventListener('mousedown', colour);
      cell.addEventListener('mouseover', colour);
      row.appendChild(cell);
    }
    element.appendChild(row);
  }
}

function randomColour(){
  var red = Math.random() * 256;
  var blue = Math.random() * 256;
  var green  = Math.random() * 256;
  return `rgb(${red}, ${blue}, ${green})`;

}

function colour(e){
  if(e.type === 'mouseover' && !mouseDown){
    return;
  }
  if(currentSchema == 'random'){
    e.target.style.background = randomColour();
  }
  else if(currentSchema == 'colour'){
    e.target.style.background = currentColor;
  }
  else if(currentSchema == 'erase'){
    e.target.style.background = "#D3D3D3";
  }
}


window.onload = () => {
  createGrid(size)
}