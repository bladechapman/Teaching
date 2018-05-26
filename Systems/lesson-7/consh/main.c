#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <dirent.h>
#include <signal.h>

#include "lib/splitString.h"
#include "lib/conshLs.h"
#include "lib/log.h"
#include <sys/types.h>
#include <unistd.h>     

char* retrieveInput() {
    char* buffer = NULL;
    size_t size = 0;

    getline(&buffer, &size, stdin);

    return buffer;
}

/* void sigintHandler (int signum) { */
/*     printf("Ending... %d\n", signum); */

/*     exit(signum); */
/* }; */

int main(int argc, char** argv) {
    // log *logInstance = createLog();
   	// char* arguments[]= {"ls", NULL};
  	
    // execvp("ls", arguments);
    // printf("command done");
    
    // signal(SIGINT, sigintHandler);

   while(1) {
        char *input = retrieveInput();
        input[strlen(input) - 1] = '\0';
        char **splits = splitString(input, ' ');

        // if (strcmp(splits[0], "ls") == 0) {
        //     consh_folder *folder = ls();
        //     consh_folder_print(folder);
        // }
        // else if (strcmp(splits[0], "!") == 0) {
        //     printLog(logInstance);
        // }

        // addToLog(input, logInstance);


        int x = fork();
        if(x==0){
        	printf("child\n");
        	int numWords = countChars(input,' ')+1;
        	char** arguments = malloc(sizeof(char*)*(numWords+1));
        	for(int i=0; i<numWords; i++){
        		arguments[i]= splits[i];
			}
			arguments[numWords] = NULL;
        	execvp(splits[0], arguments);
        	exit(0);
        }else{
        	int status;
        	waitpid(x, &status, 0);
        	printf("parent\n");
        	printf("%d\n", status);
        }

    }

    return 0;
}


