var data = [
  {
    name: "Jamestown",
    population: 2047,
    temperatures: [-34, 67, 101, 87]
  },
  {
    name: "Awesome Town",
    population: 3568,
    temperatures: [-3, 4, 9, 12]
  },
  {
    name: "Funky Town",
    population: 1000000,
    temperatures: [75, 75, 75, 75, 75]
  }
];

// Functional Programming Style

/*
function addNumbers(a, b) {
  return a + b;
}
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// The reduce method takes a function as its first argument, and that function
// accepts both the current item in the list and the current total result from
// whatever calculation you're performing.

var totalTemp = [1,2,3,4].reduce(function(previousValue, currentValue){

  // After this calculation is returned, the next currentValue will be
  // previousValue + currentValue, and the next previousValue will be the
  // next item in the array.
  return previousValue + currentValue;
});

console.log( totalTemp );

