#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include "lib/splitString.h"
#include "lib/log.h"

char* retrieveInput() {
    char* buffer = NULL;
    size_t size = 0;

    getline(&buffer, &size, stdin);

    return buffer;
}



int main(int argc, char** argv) {
    log_node *helloNode = constructNode();
    log_node *worldNode = constructNode();
    /* char* testString = "hello!"; */
    setNodeContent(helloNode, "hello!");
    setNodeContent(worldNode, "world!");

    helloNode->next = worldNode;

    log_node *curNode = helloNode;
    while(curNode != NULL) {
        printf("%s\n", curNode->content);
        curNode = curNode->next;
    }


    /* printf("%s\n", testNode->content); */

    /* strcpy(NULL, "hello"); */

    deconstructNode(helloNode);
    /* free(testNode); */

    /* setNodeContent(testNode, "hello world"); */

    /* char* inputString = retrieveInput(); */

    /* char** stringParts = splitString(inputString, ' '); */
    /* int numParts = countChars(inputString, ' ') + 1; */

    /* /1* ??? *1/ */

    /* for (int i = 0; i < numParts; i++) { */
    /*     free(stringParts[i]); */
    /*     stringParts[i] = NULL; */
    /* } */

    /* free(stringParts); */
    /* stringParts = NULL; */

    /* free(inputString); */
    /* inputString = NULL; */

    return 0;
}

