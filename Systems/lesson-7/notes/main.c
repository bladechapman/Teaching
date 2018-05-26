#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <dirent.h>
#include <signal.h>
#include <unistd.h>
#include <errno.h>
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

        pid_t child_pid = fork();
        if (child_pid == -1) {
            // Something went wrong with forking
            printf("Something went wrong!\n");
            exit(1);
        }
        else if (child_pid == 0) {
            const int num_words = countChars(input, ' ') + 1;

            if (num_words > 0) {
                char *new_args[num_words + 1];

                for (int i = 0; i < num_words; i++) {
                    new_args[i] = splits[i];
                }
                new_args[num_words] = NULL;

                execvp(new_args[0], new_args);
                printf("Something went wrong with exec: %d\n", errno);
                exit(1);
            }
            else {
                printf("Please enter a command\n");
                exit(0);
            }
        }
        else {
            // We're in the parent
            int status;
            waitpid(child_pid, &status, 0);
            printf("\e[33mprocess %d completed with status %d\n\e[0m", child_pid, status);
        }


        addToLog(input, logInstance);
    }

    return 0;
}


