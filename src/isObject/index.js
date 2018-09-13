/**
 * This function should return "true" only for "Object" type
 * @param {any} data - this can be any value: string, number, array, object, etc.
 * @return {boolean} result of the "isObject" function
 * @example
 * isObject({});   // true
 * isObject([]);   // false
 * isObject(null); // false
 */
const isObject = data => {
	let bool = false;
	if(typeof data === 'object' && typeof data !== null){
		bool = true;
	}
	return bool;
  /* your logic here...*/
};
export default isObject;
