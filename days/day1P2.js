// const values = {
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
//   zero: 0
// }
// function insertNumber(string, startIndex, deleteCount, insertString) {
//   const newString = string.slice(0, startIndex) + insertString + string.slice(startIndex + deleteCount);
//   return newString;
// };
// let string = 'eighthree2seconendaf1oneighthree';
// let indexes = [];
// let secondTry = false;
// while (indexes && !secondTry) {
//   Object.keys(values).map(key => {    
//     const startIndex = string.indexOf(key);
//     if(startIndex !== -1) {
//       indexes.push({startIndex, charLength: key.length, number: values[key]});
//     }
//   })
//   if(indexes.length === 0) {
//     secondTry = true;
//   } else {
//     let minIndexItem = indexes[0];
//     indexes.map(el => {
//       if(el.startIndex < minIndexItem.startIndex) minIndexItem = el
//     });
//     console.log(minIndexItem.number);
//     string = insertNumber(string, minIndexItem.startIndex, minIndexItem.charLength, minIndexItem.number)
//     indexes = [];
//   }
// }
// console.log(string)