#include <stdlib.h>
#include <stdio.h>
#include <string.h>

char* retrieveInput() {
    char* buffer = NULL;
    size_t size = 0;

    getline(&buffer, &size, stdin);

    return buffer;
}

char* rangeCopy(char* input, int j, int i) {
    char* dest = malloc(i - j);
    char* newStart = &input[j];

    strncpy(dest, newStart, i-j);
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

char** separateStrings(char* input) {
    int j = 0;
    int i = 0;

    const int spaceCount = countChars(input, ' ');

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

int main(int argc, char** argv) {
    printf("%s\n", separateStrings("hello world hi")[2]);
    return 0;
}
