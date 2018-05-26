#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <dirent.h>
#include <signal.h>

#include "lib/splitString.h"
#include "lib/conshLs.h"
#include "lib/log.h"

char* retrieveInput() {
    char* buffer = NULL;
    size_t size = 0;

    getline(&buffer, &size, stdin);

    return buffer;
}

int main(int argc, char** argv) {
    log *logInstance = createLog();

    while(1) {
        char *input = retrieveInput();
        input[strlen(input) - 1] = '\0';
        char **splits = splitString(input, ' ');

        if (strcmp(splits[0], "ls") == 0) {
            consh_folder *folder = ls();
            consh_folder_print(folder);
        }
        else if (strcmp(splits[0], "!") == 0) {
            printLog(logInstance);
        }

        addToLog(input, logInstance);
    }

    return 0;
}


