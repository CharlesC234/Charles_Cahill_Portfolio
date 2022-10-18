#include<stdio.h>

int main(void) {

	int number = 0;
	int counter = 0;
	int countersq = 0;

	puts("Please enter a number:");
	scanf_s("%d", &number);

	while (countersq <= number) {
		counter++;
		countersq = counter * counter;
		
	}

	printf("The smallest number such that n^2 > %d is %d", number, counter);
	return 0; 
}