#include <stdlib.h>
#include <string.h>

#include "splitString.h"

char* rangeCopy(char* input, int i, int j) {
    char* dest = malloc(j - i + 1);
    char* newStart = &input[i];

    strncpy(dest, newStart, j - i);
    dest[i] = '\0';

    return dest;
}

int countChars(char* input, char target) {
    const int length = strlen(input);
    int count = 0;
    for (int i = 0; i < length; i++) {
        if (target == input[i]) {
            count += 1;
        }
    }

    return count;
}

char** splitString(char* input, char splitChar) {
    int j = 0;
    int i = 0;

    const int spaceCount = countChars(input, splitChar);

    int arrayLocation = 0;
    char** array = malloc((spaceCount + 1) * sizeof(char*));
    for(; i < strlen(input); i++) {
        if(input[i] == ' ') {
            array[arrayLocation] = rangeCopy(input, j, i);
            arrayLocation += 1;
            j = i + 1;
        }
    }
    array[arrayLocation] = rangeCopy(input, j, i);
    return array;
}

