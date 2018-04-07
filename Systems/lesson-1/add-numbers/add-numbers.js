
function sum_array(numbers) {
    const count = numbers.length;
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum += numbers[i];
    }

    return sum;
}


function main() {
    let test_array = [0, 1, 2];
    const sum = sum_array(test_array);

    console.log(sum);
}


main();
