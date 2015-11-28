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

// *** Functional Programming Style ***

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
  finalArr = finalArr || [];
  finalArr.push([arr1[0], arr2[0]]);

  var remainingArr1 = arr1.slice(1),
      remainingArr2 = arr2.slice(1);

  if(remainingArr1.length === 0 && remainingArr2.length === 0) {
    return finalArr;
  }
  else {
    return combineArrays(remainingArr1, remainingArr2, finalArr);
  }
};

var processed = combineArrays(
      // 1st array w/ average temperatures
      pluck(data, 'temperatures')
        .map(averageForArray),
      // 2nd array w/ populations
      pluck(data, 'population')
    );

console.log( processed )