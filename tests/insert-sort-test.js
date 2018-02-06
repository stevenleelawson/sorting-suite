const {expect, assert} = require('chai');
const insertSort = require('../lib/insert-sort.js');

describe('insertSort', function() {
  it('should be a function', function(){
    assert.isFunction(insertSort, 'probably should be a function');
  })
  it('should sort a small array of numbers', function(){
    let numbers = [5,4, 500003, 3, 2, 1, 20, 88, 22];

    assert.deepEqual(insertSort(numbers),[ 1, 2, 3, 4, 5, 20, 22, 88, 500003 ])
    })
  it('should sort letters', function(){
    let letters = ['d', 'b', 'a', 'c', 'e'];

    assert.deepEqual(insertSort(letters),[ 'a', 'b', 'c', 'd', 'e'])
    })
  it('should sort positive and negative numbers', function(){
    let numbers = [-3, -5, 4, 1, 2];

    assert.deepEqual(insertSort(numbers),[-5, -3, 1, 2, 4])
    })
  it('should sort an array of random numbers', function(){
    let sortedArray = insertSort(generateRandomNumbers(33, 200));

    function generateRandomNumbers( count, maxVal ) {
      const array = [];

      for (let i = 0; i < count; i++) {
        array.push(parseInt(Math.random() * maxVal));
      }

      return array;
    }
    for(let i = 0; i < sortedArray.length - 1; i++) {
    assert.equal(sortedArray[i] <= sortedArray[i + 1], true)
    }
    })
  it('should sort an array of large numbers', function(){
    let sortedArray = insertSort(generateRandomNumbers(300, 250000));

    function generateRandomNumbers( count, maxVal ) {
      const array = [];

      for (let i = 0; i < count; i++) {
        array.push(parseInt(Math.random() * maxVal));
      }

      return array;
    }
    // assert.deepEqual(bubbleSort(numbers),randomNumberGen())
    for(let i = 0; i < sortedArray.length - 1; i++) {
    assert.equal(sortedArray[i] <= sortedArray[i + 1], true)
    }
    })
  })
