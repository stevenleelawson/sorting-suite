const {expect, assert} = require('chai');
const bubbleSort = require('../lib/bubble-sort.js');

describe('bubbleSort', function() {
  it('should be a function', function(){
    assert.isFunction(bubbleSort, 'probably should be a function');
  })
  it('should sort a small array of numbers', function(){
    let numbers = [5,4, 500003, 3, 2, 1, 20, 88, 22];

    assert.deepEqual(bubbleSort(numbers),[ 1, 2, 3, 4, 5, 20, 22, 88, 500003 ])
    })
  it('should sort letters', function(){
    let letters = ['d', 'b', 'a', 'c', 'e'];

    assert.deepEqual(bubbleSort(letters),[ 'a', 'b', 'c', 'd', 'e'])
    })
  it('should sort positive and negative numbers', function(){
    let numbers = [-3, -5, 4, 1, 2];

    assert.deepEqual(bubbleSort(numbers),[-5, -3, 1, 2, 4])
    })
  it('should sort an array of random numbers', function(){
    let sortedArray = bubbleSort(randomNumberGen);

    function randomNumberGen () {
      function randomNumberBetween0and19 () {
        var dynRando = Math.floor(Math.random() * 20);
        return dynRando;
      }
      const numArray = [];

    for(var i= 0; i < 5; i++) {
    numArray.push(randomNumberBetween0and19());
      }
      return numArray;
    }
    // assert.deepEqual(bubbleSort(numbers),randomNumberGen())
    for(let i = 0; i < sortedArray.length - 1; i++) {
    assert.equal(sortedArray[i] <= sortedArray[i + 1])
    }
    })
    it('should sort an array of large numbers', function(){
      let sortedArray = bubbleSort(randomNumberGen);

      function randomNumberGen () {
        function randomNumberBetween0and19 () {
          var dynRando = Math.floor(Math.random() * 20000000);
          return dynRando;
        }
        const numArray = [];

      for(var i= 0; i < 5; i++) {
      numArray.push(randomNumberBetween0and19());
        }
        return numArray;
      }
      // assert.deepEqual(bubbleSort(numbers),randomNumberGen())
      for(let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i + 1])
      }
      })
  })
