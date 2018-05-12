#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <dirent.h>

#include "lib/splitString.h"
#include "lib/conshLs.h"

char* retrieveInput() {
    char* buffer = NULL;
    size_t size = 0;

    getline(&buffer, &size, stdin);

    return buffer;
}

typedef struct log_entry {
    char *data;
    struct log_entry *next;
} log_entry;


typedef struct log {
    log_entry *first;
    log_entry *last;
} log;


log_entry *createLogEntry(char *data) {
    log_entry *newEntry = malloc(sizeof(log_entry));
    newEntry->data = malloc(sizeof(char) * strlen(data));
    strcpy(newEntry->data, data);
    newEntry->next = NULL;
    return newEntry;
}

log *createLog() {
    log *newLog = malloc(sizeof(log));
    newLog->first = NULL;
    newLog->last = NULL;
    return newLog;
}

log *addToLog(char *data, log *logInstance) {
    log_entry *newEntry = createLogEntry(data);

    if (logInstance->first == NULL) {
        logInstance->first = newEntry;
        logInstance->last = newEntry;
    }
    else {
        log_entry *lastEntry = logInstance->last;
        lastEntry->next = newEntry;
        logInstance->last = newEntry;
    }

    return logInstance;
}

typedef int (log_forEach_func)(char *);
void log_forEach(log *logInstance, log_forEach_func *forEach_func) {
    log_entry *currentEntry = logInstance->first;
    while (currentEntry != NULL) {
        int result = forEach_func(currentEntry->data);
        if (result <= 0) break;

        currentEntry = currentEntry->next;
    }
}

int forEach_func_print(char *stringToPrint) {
    printf("%s\n", stringToPrint);
    return 1;
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
            log_forEach(logInstance, &forEach_func_print);
        }

        addToLog(input, logInstance);
    }

    return 0;
}
