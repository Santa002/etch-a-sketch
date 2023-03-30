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

function colour(){
  
}


window.onload = () => {
  createGrid(16)
}