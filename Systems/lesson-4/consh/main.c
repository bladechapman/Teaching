#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include "lib/splitString.h"

char* retrieveInput() {
    char* buffer = NULL;
    size_t size = 0;

    getline(&buffer, &size, stdin);

    return buffer;
}


int main(int argc, char** argv) {
    printf("%s\n", splitString("hello world hi", ' ')[2]);

    return 0;
}

