#include <stdio.h>

#include "libs/libaddnumbers.h"

int main() {
    int number[3] = {1,2,3};
    int result = addNumbers(number, 3);
    printf("%d\n", result);
}
