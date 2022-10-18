#include<stdio.h>

int main(void) {

	for (int r = 1; r <= 6; r++) {

		for (int c = r; c > 0; c--) {
			printf("%-2d", c);
		}
		puts("");
	}

	return 0; 
}