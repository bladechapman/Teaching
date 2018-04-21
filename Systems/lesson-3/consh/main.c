#include <stdlib.h>
#include <stdio.h>
#include <string.h>

char* retrieveInput() {
    char* buffer = NULL;
    size_t size = 0;

    getline(&buffer, &size, stdin);

    return buffer;
}

int main(int argc, char** argv) {

    char* str = retrieveInput();
    printf("%s", str);

    return 0;
}
