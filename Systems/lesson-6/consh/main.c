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

typedef struct _entryLog {
	char* entry;
	struct _entryLog* next;
} entryLog;


typedef struct _logHistory {
	entryLog* first;
	entryLog* last;
} logHistory;

entryLog* createEntryLog(char* input){
	entryLog* newEntry= malloc(sizeof(entryLog));
	newEntry->entry = input;
	newEntry->next = NULL;
	return newEntry;
}

logHistory* createLogHistory(){
	logHistory* history= malloc(sizeof(logHistory));
	history->first = NULL;
	history->last = NULL;
	return history;
}

logHistory* logInit(char* entry){
	logHistory* log = createLogHistory();
	entryLog* newEntry = createEntryLog(entry);
	log->first = newEntry;
	log->last = newEntry;
	return log;
}

logHistory* addEntry (char* entry, logHistory* history){
	entryLog* newEntry = createEntryLog(entry);
	history->last->next = newEntry;
	history->last = newEntry;
	return history; 
}

void printLog (entryLog* currentEntry){
 	if(currentEntry==NULL){

 	}else{
 		printf("%s\n", currentEntry->entry );
	 	entryLog *nextEntry = currentEntry->next;
	 	printLog(nextEntry);
 	}
 	// entry = entry->next 
}

int main(int argc, char** argv) {

	// logHistory* history = logInit("hi");
	// addEntry("hello", history);
	// printLog(history->first);
	int x = 0;
	logHistory* history;
    while(1) {
    	char *input = retrieveInput();
    	input[strlen(input) - 1] = '\0';
        char **splits = splitString(input, ' ');
        

        if(x==0){
        	history = logInit(input);
        	x+=1;
        }else{
        	 addEntry(input, history);
        }
        


        if (strcmp(splits[0], "ls") == 0) {
            consh_folder *folder = ls();
            consh_folder_print(folder);
        }else if(strcmp(splits[0], "!") == 0) {
        	printf("----\n");
        	printLog(history->first);
        }
    
	}
    return 0;
}

