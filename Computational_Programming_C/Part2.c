#include<stdio.h>

int main(void) {
	int counter = 1;

	for (int x = 1; x <= 101; x++) {
		if (x % 2 == 0) {
			printf("%-6d", x);
			if (counter % 5 == 0) {
				puts("");
			}
		    counter++;
		}
		else {
			continue;
		}
	}

	return 0;
}