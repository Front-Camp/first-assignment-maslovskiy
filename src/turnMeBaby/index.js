/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
	try {
		if(typeof str == 'string'){
			return str.split("").reverse().join("");
		}else{
			break;
		}
	}
	catch(err) {
		throw err;
	}
  /* your logic here...*/
};

export default turnMeBaby;
