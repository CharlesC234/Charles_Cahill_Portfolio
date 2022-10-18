#include<stdio.h>
#include<math.h>

int main(void) {
	float a = 0.0;
	float b = 0.0;
	float c = 0.0;
	float dis = 0.0;
	float r1 = 0.0;
	float r2 = 0.0;

	puts("Please enter a value for a: ");
	scanf_s("%f", &a);
	puts("Please enter a value for b: ");
	scanf_s("%f", &b);
	puts("Please enter a value for c: ");
	scanf_s("%f", &c);

	dis = (pow(b, 2.0)) - (4.0 * (a * c));
	if (dis > 0) {
		r1 = (-b + sqrt(dis)) / (2.0 * a);
		r2 = (-b - sqrt(dis)) / (2.0 * a);
		printf("root1 = %.2f and root2 = %.2f", r1, r2);
	}
	else if (dis == 0) {
		r1 = -b / (2.0 * a);
		printf("root = %.2f;", r1);
	}
	else {
		puts("There are no real roots");
	}
}