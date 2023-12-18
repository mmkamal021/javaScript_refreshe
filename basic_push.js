// Array.prototype.push()
// Changing main array and return full length of array.

var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [1, 2, 3, 4, 5];
var numbers3 = [1, 2, 3, 4, 5];

numbers1.push(6, 7, 8);
numbers2.push([6, 7, 8]);
var result = numbers1.push(6, 7, 8, 9);

console.log(numbers1);
console.log(numbers2);
console.log(result);
