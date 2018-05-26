#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include "log.h"


/* -- PRIVATE -- */

typedef int (log_forEach_func)(log_entry *);

void log_forEach(log *logInstance, log_forEach_func *forEach_func) {
    log_entry *currentEntry = logInstance->first;
    while (currentEntry != NULL) {
        log_entry *nextEntry = currentEntry->next;

        int result = forEach_func(currentEntry);
        if (result <= 0) break;

        currentEntry = nextEntry;
    }
}

int forEach_func_print(log_entry *currentNode) {
    printf("%s\n", currentNode->data);
    return 1;
}

int forEach_func_free(log_entry *currentNode) {
    free(currentNode->data);
    free(currentNode);
    return 1;
}


/* --- PUBLIC --- */

void printLog(log *logInstance) {
    log_forEach(logInstance, &forEach_func_print);
}

void freeLog(log *logInstance) { 
    log_forEach(logInstance, &forEach_func_free);
    free(logInstance);
}

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
