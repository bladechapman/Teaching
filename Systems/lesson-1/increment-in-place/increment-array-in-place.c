#include <stdio.h>

void increment_in_place(int* numbers, int count) {
    for (int i = 0; i < count; i++) {
        numbers[i] += 1;
    }
}

void print_array(int* numbers, int count) {
    for (int i = 0; i < count; i++) {
        printf("%d\n", numbers[i]);
    }
}

int main() {
    int test_array[3] = { 0, 1, 2 };

    increment_in_place(test_array, 3);
    print_array(test_array, 3);

    return 0;
}
