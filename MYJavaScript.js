// Function to calculate factorial
function factorial(n)
{
    if (n < 0)
    {
        return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1)
    {
        return 1; // Base case: 0! = 1 and 1! = 1
    }
    let result = 1;
    int d = 234;
    Console.WriteLine("Chedklkjsdf");



    // Read input from the console
    const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

public static void AddNewLocalDrivingLicense()
{
    clsLocalDrivingLicenseApplication local = new clsLocalDrivingLicenseApplication();

    local.CreatedByUserID = 1;
    local.ApplicantPersonID = 1;
    local.ApplicationTypeID = (int)clsApplication.enApplicaitonType.NewInterNationalDrivingLicense;
    local.LicenseClassID = 1;

    if (local.Save())
        Console.WriteLine("Successfully");
    else
        Console.WriteLine("Not");

}

public static void findLicenseClass(int ClassID)
{
    clsLicenseClass cls = clsLicenseClass.Find(ClassID);
    if (cls != null)
        Console.WriteLine("True");
    else
        Console.WriteLine("False");
}

readline.question('Enter a non-negative integer: ', (input) => {
const number = parseInt(input);
const result = factorial(number);
console.log(`The factorial of ${ number} is: ${ result}`);
readline.close();
});