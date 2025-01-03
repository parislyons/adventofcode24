let data = require("fs").readFileSync("data.txt", 'utf8');

// split data into arrays by new line
let dataArrays = data.split("\n").map( line => line.split(" ").map(Number));

// pass conditions
let allPositive = (value: Number, index, array) => {return +value >= 1 && +value <= 3}
let allNegative = (value: Number, index, array) => {return +value <= -1 && +value >= -3}
let passes = 0

// iterate through lines
for (let i = 0; i < dataArrays.length; i++) {
    let values: number[] = [];

    // calculate gaps between array entries
    for (let v = 0; v < (dataArrays[i].length - 1); v++) {
        values.push(dataArrays[i][v+1] - dataArrays[i][v]);
    }

    // count passing arrays
    if (values.every(allPositive)) {passes++}
    if (values.every(allNegative)) {passes++}
}

console.log(passes)

