/*
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []
 */



// my answer
function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    let sum = 0;
    for (let j = 0; j < String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j+1);
    }
    if (sum === i) arr.push(i);
  }
  return arr;
}


// best answer
function sumDigPow(a, b) {
  let ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x, y, i) => x + +y ** (i + 1),0) === a)
    ans.push(a);
    a++;
  }
  return ans;
}

// best answer II
function filterFunc(n) {
  return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) === n;
}
function *range(a, b) {
  for (let i = a; i <= b; ++i) yield i;
}
function sumDigPow(a, b) {
  return Array.from(range(a, b)).filter(filterFunc);
}
// 使用 generator 语法输出 从 a 到 b 的数组，在用 filter 函数筛选 正确的数值，clever！
