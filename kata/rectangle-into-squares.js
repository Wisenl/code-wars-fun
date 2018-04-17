/* The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).
Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length (parameter named lng)
a positive integer width (parameter named wdth)
You will return an array with the size of each of the squares.

Shell bash returns a string.

  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
#Note: lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. See kata, Square into Squares. Protect trees!.

When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing. Return {} with C++. Return the string "nil" with Bash.

In that case the returned structure of C will have its sz component equal to 0. (See the "Solution" and "Examples" tabs)

  sqInRect(5, 5) should return null
  */

// my answer  使用递归
function sqInRect(Lang, Width){
  //your code here
  let arr = []
  let fun = (lng, wdth) => {
    if (lng === wdth) {
      arr.push(lng)
      return
    } else {
      let w = lng > wdth ? wdth : lng
      let l = Math.abs(lng-wdth)
      arr.push(w)
      fun(l, w)
    }
  }
  if ( Lang === Width ) {
    return null
  } else {
    fun(Lang, Width)
    return arr
  }
}


// best answer   使用迭代
function sqInRect(lng, wdth){
  let arr = []
  if(lng === wdth) return null
  while(lng > 0 && wdth > 0){
    arr.push(lng > wdth ? wdth : lng)
    lng > wdth ? lng -= wdth : wdth -= lng
  }
  return arr
}
