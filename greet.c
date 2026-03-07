#include <stdio.h>

void greet(char name[])
{
    printf("Hello, %s!\n", name);
}

int main()
{
    greet("World");
    return 0;
}