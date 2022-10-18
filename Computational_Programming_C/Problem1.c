
#include<stdio.h>
#include<ctype.h>
#include<string.h>

char* capitalizeWords(char* str);

int main(void) {

	char str1[99];
	puts("Enter the initial string: ");
	fgets(str1, 99, stdin);
	puts("The inital string is:");
	printf("%s\n", str1);
	puts(" ");
	puts("The final string is: ");
	printf("%s\n", capitalizeWords(&str1));
	return 0;
}

char* capitalizeWords(char* str) {
	int counter = 1;
	str[0] = toupper(str[0]);
	for (int i = 1; str[i + 1] != '\0'; i++) {
		if (str[i + 1] == ' ') {
			str[i] = toupper(str[i]);
		}
		else if (str[i] == ' ') {
			str[i + 1] = toupper(str[i + 1]);
		}
		counter++;
	}
	str[counter] = toupper(str[counter]);
	return str;
}