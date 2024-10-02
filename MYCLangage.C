#include <stdio.h>

// Function to calculate the sum of an array
int sumOfArray(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int n;
    
    // Input: Number of elements in the array
    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];
    
    // Input: Elements of the array
    printf("Enter %d elements of the array:\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Call the function to calculate the sum
    int result = sumOfArray(arr, n);
    
    // Output: Sum of the array elements
    printf("Sum of the elements of the array: %d\n", result);

    return 0;
}