// task 1

// line to Array, split by line

let data = require("fs").readFileSync("data.txt", 'utf8')

let dataArray = data.split("\r\n")

// map each position 0 to one array, position 1 to another

let leftArray = [];
let rightArray = [];

let arraySplitter = (value) => {
    leftArray.push(value.slice(0,5))
    rightArray.push(value.slice(8,13))
}

dataArray.map(arraySplitter);

// sort arrays alphanumerically

leftArray.sort(function(a, b){return a - b})
rightArray.sort(function(a, b){return a - b})

// compare each number

let distances = [];

for (value in leftArray) {
    distances.push(Math.abs(leftArray[value] - rightArray[value]))
}

// total distance

const initialValue = 0;
const sumWithInitial = distances.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial)



// task 2

let similarityValues = [];

for (value in leftArray) {
    let count = rightArray.filter(i => i === leftArray[value]).length
    similarityValues.push(leftArray[value] * count)
}

const sumWithInitial2 = similarityValues.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);


console.log(sumWithInitial2)
