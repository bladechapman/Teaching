#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <dirent.h>
#include "lib/splitString.h"

char* retrieveInput() {
    char* buffer = NULL;
    size_t size = 0;

    getline(&buffer, &size, stdin);
    buffer[strlen(buffer) - 1] = '\0';  // overwrite the newline character

    return buffer;
}

char* ls(){
    DIR* currentDirectory = opendir(".");
    struct dirent *returnValue = readdir(currentDirectory);
    char* directoryName = (*returnValue).d_name;

    return directoryName;
}

int main(int argc, char** argv) {
    char** pieces = splitString("hello world hi", ' ');
    printf("%d\n", strcmp("hello", pieces[0]));

    char *output = ls();
    printf("%s\n", output);

    return 0;
}
