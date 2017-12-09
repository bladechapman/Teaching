const fs = require('fs')

// look up the readline library, and see if you can figure out how to read input from the command line

console.log("hi")

function getWord() {
  let allWords = fs.readFileSync("/Users/bladechapman/Developer/Teaching/HangMan/lesson-1/words.txt", "utf8");
  let wordsArray = allWords.split("\n");
  return wordsArray[Math.floor(wordsArray.length * Math.random())];
}

let chosenWord = getWord();
let usedLetters = [];
let exposedLetters = new Array(chosenWord.length);
for (let i = 0; i < exposedLetters.length; i++) {
  exposedLetters[i] = false;
}
