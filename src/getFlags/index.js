/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
 	let arr2 = [];
	arr.forEach(function(obj){
		let ar = obj.flags;
		ar.forEach(function (argument) {
			arr2.push(argument)
		})
	});
	return arr2;
  /* your logic here...*/
};
export default getFlags;
