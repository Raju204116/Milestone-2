

//✅Task 13-1 : Instructions (no task) 
/* 
Instructions for students:
● Every task must be solved using a function that returns a value (never just console.log inside the function).
● Before writing code, write a comment with Input, Output, and Returns— as shown below.
// Input: 
// Output: 
// Returns: 
● Test your function using the provided console.log call at the bottom of each starter snippet.
*/


/* ✅Task 13-2A: Hot, Cold, or Normal
Problem Statement:
Write a function checkTemperature that takes a temperature (in Celsius) and
returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise
*/


// Input: a number
// Output: "Hot", "Cold", or "Normal"
// Returns: a string 


function checkTemperature(temp){
    if(temp>=30){
        return "Hot";
    }else if(temp <=15){
        return "Cold";
    }else 
        return "Normal"
}
// console.log(checkTemperature(35));
// console.log(checkTemperature(10))
// console.log(checkTemperature(20)); 





/* ✅Task 13-2B: Reverse a Number
Problem Statement:
Write a function reverseNumber that takes a positive whole number and
returns it with its digits reversed. (Hint: convert the number to a string first.) */

// Input: a number
// Output: reversed number
// Returns:a number


function reverseNumber(num){
    let mainNum= num.toString();
    // console.log("The original Num as a string :",mainNum);

    let reversed="";
    for(let elements of mainNum){
        reversed = elements +  reversed
    }
    reversed= Number(reversed);
    // console.log(typeof reversed);

    return reversed
     
}
console.log("Reverse of the number :",reverseNumber(1234));
console.log("Reverse of the number :",reverseNumber(7));






















