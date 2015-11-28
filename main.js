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

function addNumbers(a, b) {
  return a + b;
}

function totalForArray(arr) {
  return arr.reduce(addNumbers);
}

var totalTemp = totalForArray([1,2,3,4]);

console.log( totalTemp );