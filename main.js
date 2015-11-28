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


// #### First we need to sum all elements of the array

// **** the "not-for" (RECURSIVE) way would be

// Notice we're accepting two values, the list and the current total
function totalForArray(arr, currentTotal) {
  currentTotal += arr[0];

  // Note to experienced JavaScript programmers, I'm not using Array.shift on
  // purpose because we're treating arrays as if they are immutable.
  var remainingList = arr.slice(1);

  // This function calls itself with the remainder of the list, and the
  // current value of the currentTotal variable
  if(remainingList.length > 0) {
    return totalForArray(remainingList, currentTotal);
  }

  // Unless of course the list is empty, in which case we can just return
  // the currentTotal value.
  else {
    return currentTotal;
  }
}

console.log( totalForArray([1,2,3,4], 0) );

