#ifndef _LOG_
#define _LOG_

typedef struct log_entry {
    char *data;
    struct log_entry *next;
} log_entry;


typedef struct log {
    log_entry *first;
    log_entry *last;
} log;

log_entry *createLogEntry(char *data);
log *createLog();
log *addToLog(char *data, log *logInstance);
void printLog(log *logInstance);
void freeLog(log *logInstance);

#endif
