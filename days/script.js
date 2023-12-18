const seeds = [
  79, 14, 55, 13
]

const seedToSoil = [
  [50, 98, 2],
  [52, 50, 48]
]

const soilToFertilizer = [
  [0, 15, 37],
  [37, 52, 2],
  [39, 0, 15]
]
const fertilizerToWater = [
  [49, 53, 8],
  [0, 11, 42],
  [42, 0, 7],
  [57, 7, 4]
]
const waterToLight = [
  [88, 18, 7],
  [18, 25, 70]
]
const lightToTemperature = [
  [45, 77, 23],
  [81, 45, 19],
  [68, 64, 13]
]
const temperatuereToHumidity = [
  [0, 69, 1],
  [1, 0, 69]
]
const humidityToLocation = [
  [60, 56, 37],
  [56, 93, 4]
]


const queue = [
  seedToSoil,
  soilToFertilizer,
  fertilizerToWater,
  waterToLight,
  lightToTemperature,
  temperatuereToHumidity,
  humidityToLocation
];

const chooseOne = (number, array) => {
  // array[drs(next), srs(number), rl];
  let matchType = number;
  array.forEach((element) => {
    if(element[1] <= number && (element[1] + element[2] - 1) >= number) {
      matchType = element[0] + (number - element[1]);
      return;
    }
  })
  return matchType;
}

let typesToNext = seeds;
queue.forEach(items => {
  const newTypes = [];
  typesToNext.forEach(type => {
    newTypes.push(chooseOne(type, items));
  })
  typesToNext = newTypes;
  console.log(typesToNext);
})
// console.log(typesToNext);