#include<stdio.h>


void display(int arr[], int size);

int main(void) {

	int arr[] = { 1500, 3000, 2500, 3300, 5000 };
	display(arr, 5);

}

void display(int arr[], int size) {
	for (int i = 0; i < size; i++) {
		printf("%d\n", *(arr + i));
	}

	for (int i = 0; i < size; i++) {
	*(arr + i) = (*(arr + i) + (*(arr + i) * .05));
	}
	puts(" ");

	for (int i = 0; i < size; i++) {
		printf("%d\n", *(arr + i));
	}
}