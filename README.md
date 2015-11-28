# Functional Programming Exercise (step by step)

This exercise and the steps have been gotten from the post [Don’t Be Scared Of Functional Programming](http://www.smashingmagazine.com/2014/07/dont-be-scared-of-functional-programming/) written by [Jonathon Morgan](http://twitter.com/jonathonmorgan) 

## Exercise 

This exercise consists on getting from this array:

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

another array w/ the form:

    [
        [ population, average-of-temperatures ],
        [ population, average-of-temperatures ],
        [ population, average-of-temperatures ],
        ...
    ]

## Solution

In this repository you can follow the steps to convert the following code (_**imperative** way_):

```javascript

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

    // *** Imperative Style ***
    
    var coords = [],
        totalTemperature = 0,
        averageTemperature = 0;

    for (var i=0; i < data.length; i++) {
      totalTemperature = 0;
      
      for (var j=0; j < data[i].temperatures.length; j++) {
        totalTemperature += data[i].temperatures[j];
      }

      averageTemperature = totalTemperature / data[i].temperatures.length;
      coords.push([averageTemperature, data[i].population]);

    }

    console.log(coords);

```

Into this code (_**functional programming** way_):

```javascript
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
          pluck(data, 'temperatures')
            .map(averageForArray),
          pluck(data, 'population')
        );

    console.log( processed )
```

## Follow the steps

To clone the repository 

    git@github.com:juanmaguitar/functional-programming-sm-steps.git

To go to a step

    git checkout v0.1 
    ...
    git checkout v0.15

To go to latest revision

    git checkout master
