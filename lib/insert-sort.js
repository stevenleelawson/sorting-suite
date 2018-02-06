function insertSort (array){
  for (let i=0; i < array.length; i++) {
    let tempVar = array[i];
    let j = i - 1;


      while(j >= 0 && array[j] > tempVar ) {
        array[j + 1] = array[j];
        j--;
      }
    array[j + 1] = tempVar
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
