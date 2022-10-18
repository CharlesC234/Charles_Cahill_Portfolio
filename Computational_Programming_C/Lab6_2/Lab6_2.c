#include<stdio.h>
#include<stdlib.h>
#include<time.h>


static int heads = 0;
static int tails = 0;
int tally(int selection, int value);
int toss(void);

int main(void) {
	srand(time(0));

	for (int i = 0; i < 10000; i++) {
		tally(1, toss());
	}
	
	printf("Heads: %d\n", tally(0, 0));
	printf("Tails: %d\n", tally(0, 1));
	return 0;
}

int tally(int selection, int value) {
	if (selection == 1) {
		if (value == 1) {
			tails++;
			return -1;
		}
		else if (value == 0) {
			heads++;
			return -1;
		}
	}
	else if(selection == 0){
		if (value == 1) {
			return tails;
		}
		else if (value == 0) {
			return heads;
		}
	}
	else {
		return -1;
	}
}

int toss(void) {
	return rand() % 2;
}
