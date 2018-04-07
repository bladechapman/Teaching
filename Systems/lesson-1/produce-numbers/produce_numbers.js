
function produce_numbers() {
    return [0, 1, 2];
}

function print_array(array) {
    const count = array.length;
    for (let i = 0; i < count; i++) {
        console.log(array[i]);
    }
}

function main() {
    const test_array = produce_numbers();
    print_array(test_array);
}


main();
