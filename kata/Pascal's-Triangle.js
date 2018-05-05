/*
帕斯卡三角 / 杨辉三角
Write a function that, given a depth (n), returns a single-dimensional array representing Pascal's Triangle to the n-th level.

For example:

pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]
 */

// my answer
function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
  let result = []
  let arr_1 = [1]
  let arr_2 = []
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arr_2[j] = 1
      } else {
        arr_2[j] = arr_1[j-1] + arr_1[j]
      }
    }
    result = result.concat(arr_1)
    arr_1 = [].concat(arr_2)
  }
  return result
}

// best answer
function pascalsTriangle(n) {
  let pascal = [];
  let idx = 0;

  for ( let i = 0; i < n; i++ ) {
    idx = pascal.length - i;
    for ( let j = 0; j < i+1; j++ ) {
      if ( j === 0 || j === i ) {
        pascal.push(1);
      } else {
        pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
      }
    }
  }

  return pascal;
}