/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/

// 最大子列和是一道比较经典的算法题~

// my answer
var maxSequence = function(arr){
  let a = [0]
  let b = []
  let c = []
  let sum = 0
  arr.forEach(v => {
    sum += v
    a.push(sum)
    b.push( sum - Math.min.apply(null ,a))
  })
  if ( Math.max.apply(null,a) < 0) {
    return 0
  } else if (Math.min.apply(null,arr) >= 0) {
    return sum
  } else {
    return Math.max.apply(null, b)
  }
}

// Best answer
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}
