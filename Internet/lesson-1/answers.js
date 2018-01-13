/**
 * Implement binary search.
 * 
 * @param {Sortable[]} arr The array of items to search through
 * @param {Sortable} target The target item to search for
 * @returns {Boolean}
 */
function binarySearch(arr, target) {
    if (arr.length === 0) return false;

    let middleIndex = parseInt(arr.length / 2);
    let middleItem = arr[middleIndex];

    if (middleItem === target) {
        return true;
    }
    else {
        if (target < middleIndex) {
            return binarySearch(arr.slice(0, middleIndex), target);
        }
        else {
            return binarySearch(arr.slice(middleIndex + 1), target);
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
    height = arr.length;
    width = arr[0].length;

    let retArray = new Array(width);
    for (x = 0; x < width; x++) {
        retArray[x] = new Array(height)
    }

    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            let originalElement = arr[y][x];
            retArray[x][height - y - 1] = originalElement;
        }
    }

    return retArray;
}

let testArray = [
    [1, 2], 
    [3, 4],
    [5, 6]
];
console.log(rotateClockwise(testArray));

