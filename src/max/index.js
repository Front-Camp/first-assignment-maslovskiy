/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {

	var maxValue = arr[0];
	arr.forEach(function(item){
		if(!isNaN(item) && isFinite(item)){
			if(item > maxValue){
				maxValue = item;
			}
		}
	});
	return maxValue;
};
export default max;
