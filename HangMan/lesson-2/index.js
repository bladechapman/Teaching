
const fs = require('fs');
const readline = require('readline');
const words = fs.readFileSync('./words.txt', 'utf8');

const words_arr = words.split('\n');
const random_word = words_arr[parseInt(Math.random() * words_arr.length)];
let revealed_indexes = (new Array(random_word.length)).fill(false);
let remaining_tries = 10;
let tried_letters = new Set();

function game_step() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    if (remaining_tries === 0) {
        console.log("The word was " + random_word);
        rl.close();
        return false;
    }

    rl.question('Guess a letter\n', (answer) => {

        if (answer.length !== 1) {
            console.log("Please enter only a single character");
            rl.close();
            return game_step();
        }

        if (tried_letters.has(answer)) {
            console.log("You already guessed this letter");
            rl.close();
            return game_step();
        }

        let number_found = 0;
        for (let i = 0; i < random_word.length; i++) {
            if (random_word.charAt(i) === answer) {
                number_found += 1;
                revealed_indexes[i] = true;
            }
        }

        tried_letters.add(answer);
        if (number_found === 0) remaining_tries -= 1; 
        console.log(revealed_indexes.map((found, i) => found ? random_word.charAt(i) : '?'));
        console.log(`Remaining tries: ${remaining_tries}`);

        if (revealed_indexes.reduce((a, b) => a && b, true) === true) {
            console.log("You win!");
            rl.close();
            return true;
        }
        else {
            rl.close();
            return game_step(); 
        }

    });
}

game_step();
