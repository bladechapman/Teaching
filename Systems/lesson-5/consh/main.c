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

int directoryLength() {
	// 1. look at the current directory
	// 2. declare an integer variable
	// 3. while loop
	// if readdir != NULL, x = x + 1
	// if readdir == NULL, break
	// return x
	DIR* currentDirectory = opendir(".");
	int x = 0;

	while(1){
		struct dirent *currentEntry = readdir(currentDirectory);
		if(currentEntry!=NULL){
			x+=1;
		}else{
			break;
		}
	}
	return x;
}

char** ls(){
    DIR* currentDirectory = opendir(".");
   	char** directoryNames = malloc(sizeof(char*)*directoryLength());
    int x =0;
    while(1){
 		struct dirent *currentEntry = readdir(currentDirectory);
 		if(currentEntry==NULL){
 			break;
 		}else{
 			char* entryName = currentEntry -> d_name;
 			directoryNames[x] = entryName;
 			x+=1;
 		}

 	}
 		
   return directoryNames;
}

int main(int argc, char** argv) {
   // char** pieces = splitString("hello world hi", ' ');
    //printf("%d\n", strcmp("hello", pieces[0]));

   // char *output = ls();
   // printf("%s\n", output);


	char** names = ls();
   for(int i =0; i<directoryLength(); i++){
   	printf("%s\t", names[i]);
   }
   printf("\n");



    //return 0;
}
