// let numbers = [5,4, 500003, 3, 2, 1, 20, 88, 22];

function bubbleSort(arrayToSort) {
  for (let i=0; i < arrayToSort.length; i++) {
    // console.log('outrloop: ', i)
    for(let j = 1; j < arrayToSort.length - i; j++) {
      if(arrayToSort[j-1] > arrayToSort[j]) {
        [arrayToSort[j-1], arrayToSort[j]] = [arrayToSort[j], arrayToSort[j-1]]
        //this is destructuring es6 fanciness; this makes the swap
      }
    }
  }
  return arrayToSort;
};

// console.log(bubbleSort(numbers)
module.exports = bubbleSort;
