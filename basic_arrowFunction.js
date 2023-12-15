// One line arrow function
const hello = (a, b) => a + b;

// Arrow function
const hello2 = (a, b) => {
  a++;
  return a + b;
};
hello2(5, 6);

// How to return object in Arrow function?
const hello3 = () => {
  return {
    a: 5,
    b: 6,
  };
};

// anonymous function
function hello4() {
  return () => {
    console.log("Hello world");
  };
}
