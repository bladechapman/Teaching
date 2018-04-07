#include <stdio.h>


int sum_array(int* numbers, int count) {
    int sum = 0;

    for (int i = 0; i < count; i++) {
        sum += numbers[i];
    }

    return sum;
}


int main() {
    int test_array[3] = { 0, 1 ,2 };
    int test_sum = sum_array(test_array, 3);

    printf("%d\n", test_sum);

    return 0;
}

