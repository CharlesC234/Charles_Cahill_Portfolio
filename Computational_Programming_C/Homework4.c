#include<stdio.h>

int main(void) {

	int age;
	float income;
	float tax;
	float taxRate;
	float finalIncome;

	puts("Please enter your income:");
	scanf_s("%f", &income);
	puts("Please enter your age:");
	scanf_s("%d", &age);

	if (income <= 50000) {
		taxRate = 0.0;
		tax = 0.0;
	}
	else if (income > 50000 && income <= 100000) {
		taxRate = 7.0;
		tax = income * .07;
	}
	else {
		taxRate = 9.0;
		tax = income * .09;
	}

	if (age >= 60 && taxRate != 0) {
		tax -= 335;
	}
	finalIncome = income - tax;

	printf("Your annual income is $%.1f\n", income);
	printf("Your tax rate is %.1f\n", taxRate);
	printf("Your tax amount is $%.1f\n", tax);
	printf("Your after tax income is $%.1f\n", finalIncome);
	return 0;
}