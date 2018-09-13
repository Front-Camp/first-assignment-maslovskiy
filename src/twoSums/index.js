/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  /* your logic here...*/
  for (var i = 0; arr.length > 0; i++) {
  	let sum = arr[i] + arr[i+1];
  	if(sum == base){
  		return sum;
  	}
  }
export default twoSums;
