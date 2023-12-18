// Array.prototype.reduce()
// There is no change in main array.
var numbers = [1, 2, 3, 4, 5, 6];

var sum = numbers.reduce((prevValue, currentValue, currentIndex, arr) => {
  return prevValue + currentValue;
}, 0);

console.log(sum);
