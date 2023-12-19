const cellsize = 8;

const values = {
  'S': 'partF',

  'F': 'partF',
  'L': 'partL',
  '7': 'part7',
  'J': 'partJ',
  '-': 'parthor',
  '|': 'partver',
  '.': '',
}
const valids = ['F', 'L', '7', 'J', '|', '-', 'S']
const ways = {

}

const canvas = document.getElementById('canvas');
canvas.style.width = inputs[0].length * cellsize + 'px'; 
canvas.style.height = inputs.length * cellsize + 'px'; 

const cells = [];

const createCell = (value, x, y) => {
  let part;
  switch(value) {
    case 'F': 
    case 'L': 
    case '7': 
    case 'J': part = corner; break;
    case '-': 
    case '|': part = wall; break;
    default: part = `<svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`;
  }
  const cell = new DOMParser().parseFromString(part, 'image/svg+xml').querySelector('svg');
  const path = cell.querySelector('.path');
  if(path) path.style.fill = getPixelColor(pixelIndex, 0);
  // if(path) path.style.fill = 'grey';
  // if(path && value === 'S') path.style.fill = 'red';
  cell.classList.add('cell');  
  cell.style.top = y * cellsize + 'px';
  cell.style.left = x * cellsize + 'px';
  cell.style.height = cellsize + 'px';
  cell.style.width = cellsize + 'px';
  if(values[value]) {
    cell.classList.add(values[value]);
  }
  return {cell, path, value};
}

inputs.map((row, y) => {
  row.map((cell, x) => {
    const {cell: cellHTML} = createCell(cell, x, y);
    canvas.appendChild(cellHTML);
    pixelIndex = (pixelIndex + 1) % rainbowCanvas.width;
  })
})




function checkAll () {

  setTimeout(() => {
    checkAll();
  }, 200)
}