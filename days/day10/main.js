const cellsize = 8;

const values = {
  'S': 'part7',

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
  // [y, x]
  'S': [[0, -1], [1, 0]],

  'F': [[0, 1], [1, 0]],
  'L': [[-1, 0], [0, 1]],
  '7': [[0, -1], [1, 0]],
  'J': [[-1, 0], [0, -1]],
  '-': [[0, -1], [0, 1]],
  '|': [[-1, 0], [1, 0]],
  '.': [],
}

const canvas = document.getElementById('canvas');
canvas.style.width = inputs[0].length * cellsize + 'px'; 
canvas.style.height = inputs.length * cellsize + 'px'; 

const cells = [];
const loop = [];
let startPoint;

const createCell = (value, x, y) => {
  let part;
  switch(value) {
    case 'S': 
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
  // if(path) path.style.fill = getPixelColor(pixelIndex, 0);
  if(path) path.style.fill = 'grey';
  if(path && value === 'S') path.style.fill = 'red';
  cell.classList.add('cell');  
  cell.style.top = y * cellsize + 'px';
  cell.style.left = x * cellsize + 'px';
  cell.style.height = cellsize + 'px';
  cell.style.width = cellsize + 'px';
  if(values[value]) {
    cell.classList.add(values[value]);
  }
  if(value === 'S') {
    startPoint = {cell, path, value, position: {x, y}}
  }
  return {cell, path, value, position: {x, y}};
}

inputs.map((row, y) => {
  cells[y] = [];
  row.map((cell, x) => {
    const {cell: cellHTML, path, value, position} = createCell(cell, x, y);
    canvas.appendChild(cellHTML);
    cells[y].push({cell: cellHTML, path, value, position});
    pixelIndex = (pixelIndex + 1) % rainbowCanvas.width;
  })
})

console.log(cells)

let looped = false;
let lastWays = [];
let activeWays = [startPoint];
let loopLength = 0;

const removeWay = (way) => {
  activeWays = activeWays.filter(w => w !== way);
}

function checkAll() {
  const waysToAdd = [];
  let finish = true;
  activeWays.forEach(way => {
    ways[way.value].forEach(adds => {
      const current = cells[way.position.y + adds[0]][way.position.x + adds[1]];
      let isLast = false;
      lastWays.forEach(last => {
        if(current === last) isLast = true; 
      })
      if(current && !isLast) {
        waysToAdd.push(current);
        finish = false;
        current.cell.querySelector('path').style.fill = 'red'
      }
    })
  })
  lastWays = activeWays;
  activeWays = waysToAdd;
  if(finish) {
    looped = true;
  } else loopLength++;
  console.log(loopLength)
  if(!looped) {
    // setTimeout(() => {
      checkAll();
    // }, 2)
  }
}

// document.onload = () => {
//   checkAll();
// }

checkAll();