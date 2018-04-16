/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// my code
function findUniq(arr) {
  // do magic
  if ( arr[0] === arr[1] ) {
    for (i = 0; i < arr.length - 2; i++) {
      if (arr[0] === arr[i+2]) {
        continue
      } else {
        return arr[i+2]
      }
    }
  } else if ( arr[0] === arr[2] ) {
    return arr[1]
  } else {
    return arr[0]
  }
}

// Best Practice
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}

// other fun
function findUniq(arr) {
  var aux = (arr[0] != arr[1]) ? arr[3] : arr[0];
  return arr.filter(x=> x != aux)[0];
}
