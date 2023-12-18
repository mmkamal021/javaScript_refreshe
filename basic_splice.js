// Array.prototype.splice
// Change main Array and cutting element and include new element in this Array.

var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [1, 2, 3, 4, 5];
var result1 = numbers1.splice(1, 2, 10, 12, 13, 19);
var result2 = numbers2.splice(-1, 2, 10, 12, 13, 19);
console.log(numbers1);
console.log(result1);

console.log(numbers2);
console.log(result2);
