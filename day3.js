const input = 
// `467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
`...$.*....
.664.598..`;

const checkNumberChar = (char) => /[0-9]/.test(char);
const checkSpecialChar = (char) => char ? /[^a-zA-Z0-9.]/.test(char) : false;

const array = input.split('.').filter(el => checkNumberChar(el)).map(el => parseInt(el));
const lengths = array.map(el => String(el).length)
console.log(array)
console.log(lengths)

let number = '';
// for(let i = 0; i < input.length; i++) {
//   if(checkNumberChar(input[i])) {
//     number += input[i];
//   } else if(number) {
//     array.push([parseInt(number), number.length])
//   }
// }

console.log(array.find(/[0-9]/));

const engine = input.split('\n').map(el => el.split(''));
console.log(engine)

const checkAround = (y, x) => {
  const chars = [
    engine[y-1]?.[x-1],
    engine[y-1]?.[x],
    engine[y-1]?.[x+1],
    engine[y]?.[x-1],
    engine[y]?.[x+1],
    engine[y+1]?.[x-1],
    engine[y+1]?.[x],
    engine[y+1]?.[x+1],
  ]
  let connectedPart = false;
  chars.forEach((char) => {
    if(checkSpecialChar(char)) connectedPart = true;
  })
  return connectedPart
}

const addToSum = () => {
  let sum = 0;
  lengths.map((length, index) => {
    sum += length;
    if(sum >= count) {
      answer += array[index];
      // console.log(array[index]);
      console.log('lastcount: ', count, 'aftercount: ', sum)
      count = sum;
    }
  })
}

let answer = 0;
let count = 0;


while(count < engine.length * engine[0].length) {
  const y = parseInt(count / 10);
  const x = parseInt(count % 10);
  if(checkNumberChar(engine[y][x])) {
    const connected = checkAround(y, x);
    if(connected) {
      console.log('y: ', y, 'x: ', x, 'count: ', count);
      addToSum();
    }
  }
  count++;
}

console.log('answer: ', answer)