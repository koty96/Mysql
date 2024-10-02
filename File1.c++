#include<iostream>
#include<vector>
#include<string>
#include<fstream>
#include<iomanip>
using namespace std;
const string ClientFile="Clients.txt";

int Sum2NUmber(int number1,int number2)
{
    return number1 + number2;
}

int Sum3Number(int number1,int number2,int number3)
{
    return number1 + number2 + number3;
}

int main() 
{ 
    cout<<Sum2NUmber(3,4);
	    
}