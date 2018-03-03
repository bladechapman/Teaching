/**
 * Implement binary search.
 * 
 * @param {Sortable[]} arr The array of items to search through
 * @param {Sortable} target The target item to search for
 * @returns {Boolean}
 */
function binarySearch(arr, target) {
    let midIndex = parseInt(arr.length/2)
    let midNumber =arr[midIndex]
   	if(arr.length==0){
   		return false
   	}


    if(midNumber==target){
    	return true;
    }else{
    if(midNumber<target){
    	let rightHalf = arr.slice(midIndex+1)
    	return binarySearch(rightHalf, target)
    }else{
    	let leftHalf = arr.slice(0, midIndex)
    	return binarySearch(leftHalf, target)
    }
    }

}

let someNumbers = [1, 2, 3, 5, 8, 9];
console.log(binarySearch(someNumbers, 9));
console.log(binarySearch(someNumbers, 100));


/**
 * Rotate an image clockwise
 *
 * @param {Array<Array<Number>>} arr A 2D array of numbers between 0 and 255
 * @returns {Array<Array<Number>>} the rotated image
 */
function rotateClockwise(arr) {
    throw new Error("Implement me!")
}

let testArray = [
    [1, 2], 
    [3, 4],
    [5, 6]
];
//console.log(rotateClockwise(testArray));

