# Function to calculate the sum of a list
def sum_of_list(lst):
    return sum(lst)

def main():
    # Input: Number of elements in the list
    n = int(input("Enter the number of elements in the list: "))

    # Input: Elements of the list
    lst = []
    print(f"Enter {n} elements of the list:")
    for _ in range(n):
        element = int(input())
        lst.append(element)

    # Call the function to calculate the sum
    result = sum_of_list(lst)

    # Output: Sum of the list elements
    print(f"Sum of the elements of the list: {result}")

if __name__ == "__main__":
    main()
Enter the number of elements in the list: 5
Enter 5 elements of the list:
1
2
3
4
5
Sum of the elements of the list: 15
