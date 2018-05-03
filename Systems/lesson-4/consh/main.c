#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <dirent.h>
#include "lib/splitString.h"

char* retrieveInput() {
    char* buffer = NULL;
    size_t size = 0;

    getline(&buffer, &size, stdin);

    return buffer;
}

char* ls(){
    DIR* currentDirectory = opendir(".");
    struct dirent *returnValue = readdir(currentDirectory);
    char* directoryName = (*returnValue).d_name;

    return directoryName;
}

int main(int argc, char** argv) {


    char** pieces = splitString("hello world hi", ' ');
    printf("%d\n", strcmp("hello", pieces[0]));




    // printf("%s\n", splitString("hello world hi", ' ')[2]);

/*    char** myStrings = splitString("hello world hi", ' ');

    for(int i=0; i<3; i++){
        free(myStrings[i]);
    }
    free(myStrings);


    return 0;*/

    // printf("%d", strcmp("end", "end"));

    // while (0 < 1) {
    //     char* input = retrieveInput();
    //     int numWords = countChars(input, ' ')+1;
    //     char** output = splitString(input,' ');
    //
    //     for(int i=0; i<numWords; i++){
    //         printf("%s\n", output[i]);
    //
    //
    //         if(strncmp(output[i], "ls", 2)){
    //             printf("%s\n","ls detected");
    //         }
    //     }
    // }
    /* printf("%s\n", ls()); */
    //
    // typedef int myInt;
    // myInt crazyStuff = 0;
    //
    //
    // struct myIntArray {
    //     int *data;
    //     int length;
    // }
    // typedef struct _myIntArray myIntArray;


    // typedef struct _intArray {
    //     int *data;
    //     int length;
    // } intArray;
    //
    // // intArray testValue = malloc(sizeof(intArray));
    // intArray testValue;
    // testValue.data = malloc(sizeof(int)*4);
    // testValue.data[0] = 1;
    // testValue.length = 13;


    // printf("%d\n", testValue.length);


    // struct myStruct {
    //     int firstNumber;
    //     int SecondNumber;
    // }
    //
    //
    // struct myStruct myValue;
    // myValue.firstNumber = 0;
    // myValue.secondNumber = 1;
}
