#include<stdio.h>


int isMultiple(int *pointer1, int *pointer2);

int main(void) {
	int num1 = 0;
	int num2 = 0;

	puts("Enter number one: ");
	scanf_s("%d", &num1);
	puts("Enter number two: ");
	scanf_s("%d", &num2);

	if (isMultiple(&num1, &num2) == 1) {
		puts("Number 2 is a multiple of number 1");
	}
	else {
		puts("Number 2 is not a multiple of number 1");
	}
	
	return 0;
}

int isMultiple(int *pointer1, int *pointer2) {
	if (*pointer1 % *pointer2 == 0) {
		return 1;
	}
	else {
		return 0;
	}
}