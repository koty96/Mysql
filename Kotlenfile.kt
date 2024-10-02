fun square(num: Int): Int {
    return num * num
}

fun main() {
    // Input: Read a number from the user
    print("Enter a number: ")
    val number = readLine()!!.toInt()

    // Call the square function
    val result = square(number)

    // Output: Print the result
    println("The square of $number is $result")
}
fun main() {
    println("Hello, Kotlin!")
}
