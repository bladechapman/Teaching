#include <stdlib.h>
#include <stdio.h>
#include <string.h>

char* returnScanner (){
	char** lineptr = malloc(sizeof(char*));
	*lineptr = NULL;
	size_t*n = malloc(sizeof(size_t));
	*n = 0;
	getline( lineptr, n, stdin);
	return *lineptr;
}

int main(int argc, char** argv) {
	//printf("%s", returnScanner());
	printf("%s", returnScanner());
    return 0;
}
