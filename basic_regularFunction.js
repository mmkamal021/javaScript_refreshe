// Regular function
// Don't return  anything, Even then JavaScript default Undefine.

function hello() {
  console.log("Hello");
}

hello();

// Function Expression
// Evalute to value, this is Expression.
// Do some action, this is statement.
const hello = function () {
  console.log("Hello World");
};

// Named function expression
const hello = function hello() {
  console.log("Hi world");
};
