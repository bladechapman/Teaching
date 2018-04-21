#include "libaddnumbers.h"

void addOneToRef(int* number) {
    *number = 1;
}

int addNumbers(int* numbers, int count) {
    int sum = 0;
    for(int i=0; i<count; i++){
    	sum = sum + numbers[i];
    }
    return sum;
}
