
function increment_array_in_place(array) {
    const count = array.length;
    for (let i = 0; i < count; i++) {
        array[i] += 1;
    }
}

function print_array(array) {
    const count = array.length;
    for (let i = 0; i < count; i++) {
        console.log(array[i]);
    }
}

function main() {
    let test_array = [0, 1, 2];
    increment_array_in_place(test_array);
    print_array(test_array);
}

main();
