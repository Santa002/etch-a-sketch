let currentSchema = 'colour'
let currentColor = '#000000';
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

document.getElementById('colourSelection').oninput = (e) => currentColor = e.target.value;
document.getElementById('draw').onclick = () => currentSchema = 'colour';
document.getElementById('rgbButton').onclick = () => currentSchema = 'random';
document.getElementById('eraser').onclick = () => currentSchema = 'erase';
document.getElementById('reset').onclick = () => createGrid();
document.getElementById('slider').onmousemove = (e) => updateValue(e.target.value);

function updateValue(size){
  document.getElementById('size').innerHTML = `${size} x ${size}`;
}



function createGrid(size){
  var element = document.getElementById("grid");
  var width = 960/size;
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
  else if(currentSchema == 'draw'){
    e.target.style.background = currentColor;
  }
  else if(currentSchema == 'erase'){
    e.target.style.background = "#FFFFFF";
  }
}


window.onload = () => {
  createGrid(16)
}