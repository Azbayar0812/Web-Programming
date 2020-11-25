  
function cs142MakeMultiFilter(array) {
	var originalArray = array;
	var currentArray = array;
	function arrayFilterer(filter, callback) {
		if (filter === undefined) {
			return currentArray;
		}
		currentArray = currentArray.filter(filter);
		if (callback !== undefined) {
			callback.call(originalArray, currentArray);
		}
		return arrayFilterer;
	}
	return arrayFilterer;
}