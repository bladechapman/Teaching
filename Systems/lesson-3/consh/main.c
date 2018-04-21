#include <stdlib.h>
#include <stdio.h>
#include <string.h>

char* retrieveInput() {
    char* buffer = NULL;
    size_t size = 0;

    getline(&buffer, &size, stdin);

    return buffer;
}
char* rangeCopy(char* input, int j, int i){
	char* dest = malloc(i-j);
	char* newStart = &input[j];

	strncpy(dest, newStart, i-j);
	return dest;
}
char** separateStrings(char* input){
	int j = 0;
	int i = 0;
	int spaceCount =0;
	int arrayLocation = 0;
	for(int k=0; k<strlen(input); k++){
		if(input[k]==' '){
			spaceCount = spaceCount+1;
		}
	}
	char** array = malloc((spaceCount+1) * sizeof(char*));
	for(; i<strlen(input); i++){
		if(input[i]==' '){
			array[arrayLocation] = rangeCopy(input, j, i);
			arrayLocation += 1;
			j=i+1;
		}
	}
	array[arrayLocation] = rangeCopy(input, j, i);
	return array;
}

int main(int argc, char** argv) {

   /* char* str = retrieveInput();
    printf("%s", str);

    return 0;*/
   // printf("%s", rangeCopy( "ksdjf", 1, 3));
	printf("%s\n", separateStrings("hello world hi")[2]);
}
