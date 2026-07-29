
/*
✅What is bug ?
A bug is a mistake or flaw in a program that causes it to behave unexpectedly or produce incorrect results.

✅What is debug ?
Debugging is the process of finding, identifying, and fixing bugs (errors) in a program.

⭐Common debugging methods :
Read error messages – Errors often tell you what is wrong.
console.log() – Print values to understand what is happening.
Browser DevTools – Use breakpoints and inspect variables.
Check code step by step – Verify each part of the logic.

📌A bug is a problem in the code, and debugging is the act of solving that problem.




✅✅Types of errors -3 : 

| Error Type        | Program Starts? | Error Message? | Example                                           |
| ----------------- | --------------- | -------------- | ------------------------------------------------- |
| **Syntax Error**  | ❌ No            | ✅ Yes          | Missing `)` or `}`                                |
| **Runtime Error** | ✅ Yes           | ✅ Yes          | Undefined variable, calling a non-existent method |
| **Logical Error** | ✅ Yes           | ❌ No           | Wrong condition or incorrect formula              |


✅1. Syntax Error   - Invalid JavaScript syntax.
A syntax error happens when you break JavaScript's grammar rules. The program won't even start.

Example
console.log("Hello"

Output:
SyntaxError: missing ) after argument list

Why?
The closing ) is missing.

Correct code:
console.log("Hello");



✅2. Runtime Error  - Occurs while the program is running.
A runtime error occurs while the program is running. The code starts executing but crashes when it reaches the problematic line.

Example
let name = "Raju";
console.log(name.toUpperCase()); 
console.log(age);                

Output:
ReferenceError: age is not defined

Why?
The variable age doesn't exist.

Correct code:
let name = "Raju";
let age = 24;
console.log(name.toUpperCase());
console.log(age);



//Another runtime error example:
let num = 10;
console.log(num.toUpperCase());

Output:
TypeError: num.toUpperCase is not a function





✅3. Logical Error  - The program runs, but the output is incorrect.
A logical error doesn't produce an error message. The program runs successfully, but the result is incorrect.

Example
let marks = 70;
if (marks > 70) {
    console.log("Passed");
}

Output:
Nothing is printed.

Why?
The condition should allow 70, but it only checks values greater than 70.

Correct code:
let marks = 70;
if (marks >= 70) {
    console.log("Passed");
}

Output:
Passed


//Another Logical Error Example
let a = 10;
let b = 5;
console.log("Sum =", a - b);

Output:
Sum = 5

The program runs without errors, but the logic is wrong because subtraction (-) was used instead of addition (+).

Correct code:
console.log("Sum =", a + b);

Output:
Sum = 15





✅✅ Types of error messages - 7 : 

| Error Type     | When it occurs                                   |
| -------------- | ------------------------------------------------ |
| SyntaxError    | Invalid JavaScript syntax                        |
| ReferenceError | Variable or function doesn't exist               |
| TypeError      | Invalid operation on a value's type              |
| RangeError     | Value is outside the allowed range               |
| EvalError      | Related to `eval()` (very rare)                  |
| URIError       | Invalid URI encoding/decoding                    |
| AggregateError | Multiple errors combined (e.g., `Promise.any()`) |

⚠️For beginners, you'll encounter these most often: SyntaxError, ReferenceError, TypeError, RangeError
⚠️The other three (EvalError, URIError, and AggregateError) are less common in everyday JavaScript programming.

✅1. SyntaxError
console.log("Hello";

SyntaxError: missing ) after argument list

✅2. ReferenceError
A ReferenceError occurs when you try to use a variable or function that hasn't been declared.

let name = "Raju";
console.log(age);

ReferenceError: age is not defined


✅3. TypeError
A TypeError occurs when you perform an operation on a value of the wrong type.

let num = 10;
num.toUpperCase();

TypeError: num.toUpperCase is not a function
// toUpperCase() is a String method, not a Number method.



✅4. RangeError
A RangeError occurs when a value is outside the allowed range.

let arr = new Array(-1);

RangeError: Invalid array length

// Another Example
let num = 10;
console.log(num.toFixed(101));

RangeError: toFixed() digits argument must be between 0 and 100




✅5. EvalError
// Rarely seen in modern JavaScript.

✅6. URIError
decodeURIComponent("%");

Reason: Invalid URI.

✅7. AggregateError
Promise.any([
  Promise.reject("Error 1"),
  Promise.reject("Error 2")
]).catch(err => console.log(err));

Reason: Promise.any() failed because all promises were rejected.











*/
