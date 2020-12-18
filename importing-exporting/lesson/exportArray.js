//creating an array of numbers
var arr = [1,2,3,4,5,6,7,8];

//exporting the array of numbers
// you can only use module.exports once in a file
// its meant to export everything in a file
// module.exports = arr;

var stringOne = "stringOne";
var stringTwo = "stringTwo";
var stringThree = "stringThree";

var obj = {
  array: arr,
  stringOne: stringOne,
  stringTwo: stringTwo,
  stringThree: stringThree
}

module.exports = obj;
