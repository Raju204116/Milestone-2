
/* 
✅What are Conditional Statements?
A conditional statement allows your program to make decisions.
It executes different code depending on whether a condition is true or false.

Think of it like this:

If it rains ☔ → Take an umbrella.
Else → Wear sunglasses. 😎

Your decision depends on a condition.


✅Why Do We Need Conditionals?

Without conditionals, every line of code would run.
With conditionals, your program can decide what to do.

Examples:
Login successful or failed
Pass or fail
Eligible to vote or not
Even or odd
Positive or negative
Leap year or not


✅Types of Conditional Statements

JavaScript provides four main ways:

| Situation                       | Use                   |
| ------------------------------- | --------------------- |
| One condition                   | `if`                  |
| Two choices                     | `if...else`           |
| Many ranges or conditions       | `if...else if...else` |
| One value with many fixed cases | `switch`              |



//details :

✅1. if Statement  : Runs code only if the condition is true.

syntax:
if (condition) {
    // code to execute
}


ex:
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}


✅2. if...else  : Executes one block if the condition is true, otherwise executes another block.

Syntax :
if (condition) {
    // true block
} else {
    // false block
}

Example:
let age = 16;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}





✅3. if...else if...else  : Used when there are multiple conditions.

Syntax:
if (condition1) {
    //code
} else if (condition2) {
    //code
} else if (condition3) {
    //code
} else {
    //default output
}


Example :
let mark = 72;

if (mark >= 80) {
    console.log("A+");
} else if (mark >= 70) {
    console.log("A");
} else if (mark >= 60) {
    console.log("B");
} else if (mark >= 50) {
    console.log("C");
} else if (mark >= 40) {
    console.log("D");
} else {
    console.log("F");
}




✅4. switch Statement

Useful when comparing one value against many fixed options.

Syntax
switch (value) {
    case option1:
        // code
        break;

    case option2:
        // code
        break;

    default:
        // code
}




Example:
let day = 3;

switch (day) {
    case 1:
        console.log("Saturday");
        break;

    case 2:
        console.log("Sunday");
        break;

    case 3:
        console.log("Monday");
        break;

    default:
        console.log("Invalid Day");
}



✅Nested if  : You can place an if inside another if.

ex:
let age = 20;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    }
}







*/
