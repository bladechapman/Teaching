/**
 * Implement binary search.
 * 
 * @param {Sortable[]} arr The array of items to search through
 * @param {Sortable} target The target item to search for
 * @returns {Boolean}
 */
function binarySearch(arr, target) {
    //throw new Error("Implement me!");
}

let someNumbers = [1, 9, 5, 2, 8, 3];
console.log(binarySearch(someNumbers, 9));
console.log(binarySearch(someNumbers, 100));


/**
 * Rotate an image clockwise
 *
 * @param {Array<Array<Number>>} arr A 2D array of numbers between 0 and 255
 * @returns {Array<Array<Number>>} the rotated image
 */
function rotateClockwise(arr) {
   let result = new Array (arr[0].length)

	for(let i=0; i<result.length; i++){
		let subArray = new Array(arr.length)
		result[i]=subArray;
	}
	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr[0].length; j++){
			let n = arr[i][j];
			result[j][arr.length-i-1]=n;
		}
	}
	return result;

}

let testArray = [
    [1, 2], 
    [3, 4],
    [5, 6]
];
console.log(rotateClockwise(testArray));

