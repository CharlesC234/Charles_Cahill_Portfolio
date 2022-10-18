#include<stdio.h>

void g(int n);

int main(void) {
	int number = 0;
	puts("Enter the number of grades: ");
	scanf_s("%d", &number);
	g(number);
	return 0;
}

void g(int n) {
	if (0 == n) {
		return;
	}
	else {
		int grade = 0;
		puts("Enter the grade: ");
		scanf_s("%d", &grade);
		g(n - 1);
		printf("%d\n", grade);
	}
}