
/* 
⚠️⚠️Logical Operators in Conditions

You often combine conditions using:
✅AND (&&) : Both conditions must be true.

let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Entry Allowed");
}



✅OR (||) : At least one condition must be true.

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("No Office");
}



✅NOT (!) : Reverses a boolean value.

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in.");
}



⚠️⚠️What are Truthy and Falsy Values?

When JavaScript evaluates a condition inside an if statement, it expects a boolean (true or false).
But JavaScript is flexible—it can convert other values into true or false automatically.

*************************
Example1: truthy
if ("Raju") {
    console.log("Hello");
}
Output: Hello

//Because the string "Raju" is considered truthy.

*******************
Example2: falsy
let age;

if (age) {
    console.log("Age exists");
}

//Nothing is printed. because undefined

************************
Example3: falsy
if (false) {
    console.log("Hello");
}
//Nothing is printed. 



✅Truthy Values
A truthy value is any value that JavaScript treats as true in a boolean context.

//ex of truthy values : (the result of these are true)
true
'false'   //false with string
1
-5
3.14
"Hello"
"0"
"false"
[]             //empty array
{}             //empty obj
function() {}  //empty function
" "            //empty string with a space



✅Falsy Values
A falsy value is any value that JavaScript treats as false.

There are only 8 falsy values in JavaScript : (the result of these are false)

| Value     | Type         |
| ----------| ------------ |
| false     | Boolean      |
| 0         | Number       |
| -0        | Number       |
| 0n        | BigInt       |
| ""        | Empty String |
| null      | Null         |
| undefined | Undefined    |
| NaN       | Number       |







⚠️⚠️What is the Ternary Operator?


The ternary operator (? :) is a shorthand for if...else.
It is called ternary because it uses three parts:

Condition
Value if true
Value if false

Syntax : 
condition ? valueIfTrue : valueIfFalse;

ex:
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");


let number = 7;
console.log(number % 2 === 0 ? "Even" : "Odd");

 */