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

function addNumbers(a, b) {
  return a + b;
}

function average(total, count) {
  return total / count;
}

function totalForArray(arr) {
  return arr.reduce(addNumbers);
}

function averageForArray(arr) {
  return average(totalForArray(arr), arr.length);
}

var averageTemp = averageForArray([1,2,3,4]);

console.log( averageTemp );