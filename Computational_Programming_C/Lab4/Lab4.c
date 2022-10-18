#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main(void) {

	int amount = 0;
	int max = 0;
	int min = 0;
	int counter = 1;
	int randN = 0;
	char userIn;
	int sum = 0;
	int indexCount = 0;
	srand(time(0));

	puts("Enter the range of random numbers: ");
	scanf_s("%d", &max);
	puts("Enter the minimum number: ");
	scanf_s("%d", &min);
	puts("Enter amount of random numbers: ");
	scanf_s("%d", &amount);

	puts(" -------------");
	for (amount; amount > 0; amount--) {
		if ((counter % 4) == 0) {
			counter++;
			continue; 
		}
		randN = (rand() % (max - min + 1)) + min;
		printf(" |%-3.3d  |  %3d|\n", counter, randN);
		sum += randN; 
		counter++;
		indexCount++;
	}

	do {

		puts("Select an option: ");
		puts("a - average all random numbers");
		puts("b - sum of all random numbers");
		puts("c - exit program");
		scanf_s(" %c", &userIn, 1);

		switch (userIn) {
		case('a'):
			printf("The average is %d\n", sum / indexCount);
			continue;
		case('b'):
			printf("The sum is %d\n", sum);
			continue;
		case('c'):
			break;
		}
	} while (userIn != 'c');

	puts("Thank You!");

}