#include <stdio.h>
#include <stdlib.h>

int* produce_numbers() {
    int some_numbers[3] = {1, 2, 3};

    /* int *some_numbers = malloc(sizeof(int) * 3); */
    /* for (int i = 0; i < 3; i++) { */
    /*     some_numbers[i] = i; */
    /* } */

    return some_numbers;
}

void print_array(int* array, int count) {
    for (int i = 0; i < count; i ++) {
        printf("%d\n", array[i]);
    }
}

int main() {
    int* numbers = produce_numbers();
    print_array(numbers, 3);

    return 0;
}
