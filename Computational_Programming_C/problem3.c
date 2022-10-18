#include<stdio.h>

size_t stringLengthIndex(const char* sPtr);
size_t stringLengthPointers(const char* sPtr);

#define SIZE 100
int main(void) {
	char str[SIZE];
	puts("Enter a string");
	scanf_s("%s", str, 99);
    
	printf("\n%zu\n", stringLengthIndex(&str));
	printf("\n%zu\n", stringLengthPointers(&str));
	return 0;
}

size_t stringLengthIndex(const char* sPtr) {
	int i = 0;
	for (i = 0; sPtr[i] != '\0'; ++i);
	return i;
}

size_t stringLengthPointers(const char* sPtr) {
	int i = 0;
	while (*sPtr != '\0')
	{
		i++;
		*sPtr++;
	}
	return(i);
}