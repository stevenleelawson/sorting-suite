function insertSort (array){
  for (let i=0; i < array.length; i++) {
    let currentElem = array[i];
    let previousIndex = i - 1;


      while(previousIndex >= 0 && array[previousIndex] > currentElem ) {
        array[previousIndex + 1] = array[previousIndex];
        previousIndex--;
      }
    array[previousIndex + 1] = currentElem
  }
  return array;
}
module.exports = insertSort;

//two arrays
//unsorted(passed in)
//sorted starts empty
//unsorted.shift()
//sorted.push
//compare s[0] and s[1]
