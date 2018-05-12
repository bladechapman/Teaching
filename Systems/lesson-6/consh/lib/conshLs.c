#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <dirent.h>

#include "conshLs.h"


int directoryLength(char* directoryName) {
    DIR *directory = opendir(directoryName);
    if (directory == NULL) return 0;

    int length = 0;
    struct dirent *currentEntry = readdir(directory);
    while (currentEntry != NULL) {
        length += 1;
        currentEntry = readdir(directory);
    }

    closedir(directory);
    return length;
}

consh_folder *ls(){
    char *currentDirectoryName = ".";
    int length = directoryLength(currentDirectoryName);
    DIR *directory = opendir(currentDirectoryName);
    consh_folder *conshFolder = malloc(sizeof(consh_folder));

    conshFolder->length = length;
    conshFolder->entries = malloc(sizeof(char *) * length);

    for (int i = 0; i < length; i++) {
        struct dirent *currentEntry = readdir(directory);
        char *currentEntryName = currentEntry->d_name;
        int currentEntryNameLength = strlen(currentEntryName);

        conshFolder->entries[i] = malloc(sizeof(char) * currentEntryNameLength);
        strcpy(conshFolder->entries[i], currentEntryName);
    }

    closedir(directory);
    return conshFolder;
}

void consh_folder_free(consh_folder *folder) {
    int length = folder -> length;

    for (int i = 0; i < length; i++) {
        free(folder->entries[i]);
    }
    free(folder->entries);
    free(folder);
}

void consh_folder_print(consh_folder *folder) {
    int length = folder->length;

    for (int i = 0; i < length; i++) {
        printf("%s\t", folder->entries[i]);
    }
    printf("\n");
}
