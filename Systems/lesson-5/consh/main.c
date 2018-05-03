#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <dirent.h>
#include "lib/splitString.h"

char* retrieveInput() {
    char* buffer = NULL;
    size_t size = 0;

    getline(&buffer, &size, stdin);

    return buffer;
}

char* ls(){
    DIR* currentDirectory = opendir(".");
    struct dirent *returnValue = readdir(currentDirectory);
    char* directoryName = (*returnValue).d_name;

    return directoryName;
}

int main(int argc, char** argv) {
    char* result = ls();

    printf("%s\n", result);

    return 0;
}
