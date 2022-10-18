#include<stdio.h>
#include<math.h>

double f(double x);

int main(void) {
	printf("f(.3) = %f\n", f(.3));
	printf("f(.5) = %f\n", f(.5));
	printf("f(.8) = %f\n", f(.8));
}

double f(double x) {
	double number = 0.0;
	for (int n = 1; n < 20; n++) {
		number += (pow(-1, n + 1)) * ((pow(x, n)) / n);
	}
	return number;
}