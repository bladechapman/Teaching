
// 1. make a function called isPalindrome that tests to see if a word is a palindrome
function isPalindrome(word) {
  let wordArray = word.split('')
  let originalWordArray = word.split('')
  let reverseWordArray = wordArray.reverse()
  for(let i=0; i<wordArray.length; i++){
    if(originalWordArray[i]!=reverseWordArray[i]){
      return false;
    }
  }
    return true;
}

// 2. make a number called accumulateFives that only adds a number to an array if
// the number is greater than 5
function accumulateFives(array, number) {
    return [];
}

// 3. make a function called mapString that turns all the items in an array to
// strings using obj.toString
function mapString(array) {
let newArray = array.map(function (currentValue){
  return currentValue.toString();
 })
    return newArray;
}

// 4. make a function called sumTwos that sums all the multiples of twos in an array
function sumTwos(array) {
    return [];
}
