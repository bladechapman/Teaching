
// Write a function that funds the sum of an array of numbers
//
// Example:
//  input: [1,2,3,4,5]
//  output: 15
function sumArray(arr) {
   let sum = 0;
    for(let i=0; i<arr.length; i++){
     	let x = arr[i]
     	sum = sum+x
    }
    return sum
    // TODO: implement me!
}

let testArray = [1, 2, 3, 4, 5];
console.log(sumArray(testArray));



// Write a function that return the largest element in a list
//  input: [1,2,3,4,5]
//  output: 5
function largestElement(arr) {
    // TODO: implement me!
    let largest = 0;
    for(let i =0; i<arr.length; i++){
    	if(arr[i]>= largest){
    		largest = arr[i]
    	}
    }
    return largest
}
 testArray = [1, 5, 3, 10, 20, 7, 82, 4];
console.log(largestElement(testArray));


// Write a function that prints the first n fibonacci numbers
//  input: 6
//  output: [1, 1, 2, 3, 5, 8]
function fibonacci(n) {
    // TODO: implement me!
    if(n==0){
    	return 1;
    }else if (n==1){
    	return 1;
    }else{
    	return fibonacci(n-1) + fibonacci(n-2);
    }
}
let testN = 8;
console.log(fibonacci(testN));
