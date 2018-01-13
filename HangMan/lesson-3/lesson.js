const fs = require('fs')
const readline = require('readline')

// look up the readline library, and see if you can figure out how to read input from the command line

console.log("hi")

function getWord() {
  let allWords = fs.readFileSync("/Users/bladechapman/Developer/Teaching/HangMan/lesson-1/words.txt", "utf8");
  let wordsArray = allWords.split("\n");
  return wordsArray[Math.floor(wordsArray.length * Math.random())];
}

let chosenWord = getWord();
let chosenWordArray = chosenWord.split('')
let usedLetters = [];
let exposedLetters = new Array(chosenWord.length);
for (let i = 0; i < exposedLetters.length; i++) {
  exposedLetters[i] = false;
}

function checkLetter(letter, array, revealedLetters){
  for(let i=0; i<array.length; i++){
    if(letter == array[i]){
      revealedLetters[i]=true
    }
  }
}

function printState(exposed, word){
let wordString = ""
  for(let i=0; i<exposed.length; i++){
    if(exposed[i]==true){
      wordString =  wordString + word[i]
    }else{
      wordString = wordString + '_'
    }
  }
  console.log(wordString)
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log(chosenWord)
rl.question('Choose a letter', function (response){
console.log(response)
usedLetters.push(response)
checkLetter(response, chosenWordArray, exposedLetters)
printState(exposedLetters, chosenWordArray)
rl.close()
 })
