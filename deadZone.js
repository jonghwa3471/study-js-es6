console.log(x); // undefined
var x = 5;
console.log(x); // 5

console.log(y); // ReferenceError: y is not defined
let y = 10;

myFunction(); // "Hello, World!"

function myFunction() {
  console.log("Hello, World!");
}

myFunction(); // TypeError: myFunction is not a function

var myFunction = function () {
  console.log("Hello, World!");
};
