// Array.prototype.concat()
// There is no changing main array
var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [6, 7, 8, 9, 10];
var numbers3 = [6, 7, 8, 9, 10];

var result = numbers1.concat(numbers2, numbers3);

console.log(numbers1);
console.log(result);
