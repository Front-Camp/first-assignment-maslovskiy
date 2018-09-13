/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
		let str2 = '';
		if(length < str.length && typeof str === 'string')){
			for (var i = 0; i < length; i++) {
				str2 = str2 + str[i];
			}
			str2 += replacer;
		}
			return str2;
  /* your logic here...*/
};

export default truncate;
