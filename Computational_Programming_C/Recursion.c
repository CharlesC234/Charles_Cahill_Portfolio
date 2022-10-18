#include<stdio.h>

int sumOfRange(int start, int end);

int main(void) {
	int start = 0;
	int end = 0;
	puts("Enter the start of the range: ");
	scanf_s("%d", &start);
	puts("Enter the end of the range: ");
	scanf_s("%d", &end);
	printf("The sum of the numbers in the range is %d ", sumOfRange(start, end));
}

int sumOfRange(int start, int end) {
	static int number;
	if (start > end) {
		return number;
	}
	else {
		number += start;
	    sumOfRange(start + 1, end);
	}
}