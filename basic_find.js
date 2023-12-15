// Array.prototype.find()
const arr = [2, 6, 19, 2, 13, 44];
const found = arr.find((element) => element > 10); // Can't  changing main array

console.log(found); // Find fast true value then breck the function

// Array.prototype.find()

var result = arr.find(function (currentValue) {
  return currentValue > 4;
});

console.log(arr);
console.log(result);
