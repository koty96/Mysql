using System;

class Program
{
    // Function to calculate the square of a number
    static int Square(int num)
    {
        return num * num;
    }

    static void Main()
    {
        // Input: Read a number from the user
        Console.Write("Enter a number: ");
        int number = int.Parse(Console.ReadLine());

        // Call the Square function
        int result = Square(number);

        // Output: Print the result
        Console.WriteLine($"The square of {number} is {result}");
    }
}
