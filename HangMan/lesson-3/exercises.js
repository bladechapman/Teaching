
function insertionSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let value = numbers[i];

        for (var j = i - 1; j >= 0; j--) {
            if (numbers[j] > value) {
                numbers[j + 1] = numbers[j];
            }
            else {
                break;
            }
        }

        numbers[j + 1] = value;
    }

    return numbers;
}


function selectionSort(numbers) {  
    let length = numbers.length;
    for (let i = 0; i < length - 1; i++) {

        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (numbers[j] < numbers[min]) {
                min = j;
            }
        }

        if (min != i) {
            var tmp = numbers[i];
            numbers[i] = numbers[min];
            numbers[min] = tmp;
        }
    }

    return numbers;
}


function mergeSort(numbers) {
    if (numbers.length < 2)
        return numbers;
 
    var middle = parseInt(numbers.length / 2);
    var left   = numbers.slice(0, middle);
    var right  = numbers.slice(middle, numbers.length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right) {
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }
 
    while (left.length) {
        result.push(left.shift());
    }
 
    while (right.length) {
        result.push(right.shift());
    }
 
    return result;
}

let FgCyan = "\x1b[36m"
let Reset = "\x1b[0m"
console.log(`Insertion Sort ${FgCyan}${insertionSort([5,3,2,8,4,9,0,1])}${Reset}`);
console.log(`Selection Sort ${FgCyan}${selectionSort([5,3,2,8,4,9,0,1])}${Reset}`);
console.log(`Merge Sort ${FgCyan}${mergeSort([5,3,2,8,4,9,0,1])}${Reset}`);
