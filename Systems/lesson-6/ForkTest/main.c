#include <stdio.h>
#include <unistd.h>
#include <signal.h>
#include <stdlib.h>

void signalHandler(int x){
	printf("hi\n");
	exit(SIGABRT);
}


int main() {
	printf("Hello!\n");
	//fork();
	printf("World!\n");
	signal(SIGINT, signalHandler);
	

	while(1){

	}
}