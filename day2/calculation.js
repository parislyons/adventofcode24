var data = require("fs").readFileSync("data.txt", 'utf8');
// split data into arrays by new line
var dataArrays = data.split("\n").map(function (line) { return line.split(" ").map(Number); });
// pass conditions
var allPositive = function (value, index, array) { return +value >= 1 && +value <= 3; };
var allNegative = function (value, index, array) { return +value <= -1 && +value >= -3; };
var passes = 0;
// iterate through
for (var i = 0; i < dataArrays.length; i++) {
    var values = [];
    for (var v = 0; v < (dataArrays[i].length - 1); v++) {
        values.push(dataArrays[i][v + 1] - dataArrays[i][v]);
    }
    if (values.every(allPositive)) {
        passes++;
    }
    if (values.every(allNegative)) {
        passes++;
    }
}
console.log(passes);
