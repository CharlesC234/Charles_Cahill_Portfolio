#include<stdio.h>

int main(void) {

	int* ptr;
	int x;
	ptr = &x;
	*ptr = 0;
	*ptr += 5;
	(*ptr)++;
	printf(" x = %dn", x);
	printf(" \n *ptr = %dn", *ptr);

	return 0; 
}