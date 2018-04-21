#include <stdio.h>

/* Can't do this in javascript! */

void increment_single(int* number) {
    *number += 1;
}

int main() {
    int test_number = 1;
    increment_single(&test_number);
    printf("%d\n", test_number);

    return 0;
}
