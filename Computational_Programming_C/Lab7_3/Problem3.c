#include<stdio.h>

void squareOfTwoNumbers(double *num1, double *num2);

int main(void) {

	double num1 = 0.0;
	double num2 = 0.0;

	puts("Enter the first number: ");
	scanf_s("%lf", &num1);
	puts("Enter the second number: ");
	scanf_s("%lf", &num2);

	printf("Values before squaring: %.2lf, %.2lf\n", num1, num2);
	squareOfTwoNumbers(&num1, &num2);

	return 0;
}

void squareOfTwoNumbers(double *num1, double *num2) {

	*num1 = ((*num1) * (*num1));
	*num2 = ((*num2) * (*num2));
	printf("Values after squaring: %.2f, %.2f\n", *num1, *num2);
}