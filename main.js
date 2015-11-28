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

function getItem(propertyName) {
  return function(item) {
    return item[propertyName];
  };
}

function pluck(arr, propertyName) {
  return arr.map(getItem(propertyName));
}

function combineArrays(arr1, arr2, finalArr) {
  // Just so we don't have to remember to pass an empty array as the third
  // argument when calling this function, we'll set a default.
  finalArr = finalArr || [];

  // Push the current element in each array into what we'll eventually return
  finalArr.push([arr1[0], arr2[0]]);

  var remainingArr1 = arr1.slice(1),
      remainingArr2 = arr2.slice(1);

  // If both arrays are empty, then we're done
  if(remainingArr1.length === 0 && remainingArr2.length === 0) {
    return finalArr;
  }
  else {
    // Recursion!
    return combineArrays(remainingArr1, remainingArr2, finalArr);
  }
};


var populations = pluck(data, 'population');
var allTemperatures = pluck(data, 'temperatures');
var averageTemps = allTemperatures.map(averageForArray);
var processed = combineArrays(averageTemps, populations);

console.log( processed )