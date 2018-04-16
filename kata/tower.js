/*
Build Tower
Build Tower by the following given argument:

number of floors (integer and always greater than 0).
output an array
*/

/*
for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
*/

// my solution
function towerBuilder(nFloors) {
  // build here
  let arr = []
  for (row = 1; row <= nFloors; row++) {
    let strStartAndEnd = ' '.repeat(nFloors - row)
    let strMid = '*'.repeat(row * 2 -1)
    string = `${strStartAndEnd}${strMid}${strStartAndEnd}`
    arr.push(string)
  }
  return arr
}



// Best Practice
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}
