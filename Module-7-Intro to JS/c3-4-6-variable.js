
/* 

✅What is a Variable?
A variable is a named container used to store data.

Think of it as a box with a label.
+------------------+
|      "Raju"      |
+------------------+
         ▲
         │
      studentName

Here:

Box = stores the value
Label = variable name (studentName)
Value = "Raju"


✅Why Do We Need Variables?

//Without variables:

console.log("Raju");
console.log("Raju");
console.log("Raju");

If the name changes, you'd have to update it everywhere.


//With a variable:

let studentName = "Raju";

console.log(studentName);
console.log(studentName);
console.log(studentName);

Now, if the value changes: 
studentName = "Rahim";

Everywhere you use studentName, it will now refer to "Rahim".





✅Declaring a Variable

//syntax:
let variableName = value;

In JavaScript, there are 3 ways to declare variables:

let age = 25;
const country = "Bangladesh";
var city = "Dhaka";   //Avoid var in modern JavaScript unless you're learning older code.

//
let studentName = "Raju";

here: 
let → declares the variable.
studentName → variable name.
= → assignment operator.
"Raju" → value.
; → statement terminator (optional in many cases, but recommended).



let vs const

| `let`                      | `const`                           |
| -------------------------- | --------------------------------- |
| Can be reassigned          | Cannot be reassigned              |
| Use when the value changes | Use when the value stays the same |





✅Variable Naming Rules in JavaScript

| Rule                                       | Example                              |
| ------------------------------------------ | ------------------------------------ |
| ✅ Start with a letter, `_`, or `$`         | `name`, `_count`, `$price`           |
| ❌ Don't start with a number                | `1name` ❌                            |
| ✅ Numbers can come later                   | `name1` ✅                            |
| ❌ No spaces                                | `first name` ❌                       |
| ❌ No special characters like `-`, `@`, `#` | `my-name` ❌                          |
| ❌ Don't use reserved keywords              | `let`, `if`, `for` ❌                 |
| ✅ Variable names are case-sensitive        | `name`, `Name`, `NAME` are different |
| ✅ Use camelCase                            | `studentName`, `totalPrice`          |





✅Naming Convention (Best Practice)
In JavaScript, use camelCase.

let firstName = "Raju";
let lastName = "Ahmed";
let totalPrice = 500;
let isLoggedIn = true;





✅What is a Keyword in JavaScript?

A keyword is a reserved word that has a special meaning in JavaScript.

| Keyword    | Purpose                         |
| ---------- | ------------------------------- |
| `let`      | Declare a variable              |
| `const`    | Declare a constant              |
| `var`      | Declare a variable (older way)  |
| `if`       | Conditional statement           |
| `else`     | Alternative condition           |
| `switch`   | Multiple conditions             |
| `case`     | Used inside `switch`            |
| `for`      | Loop                            |
| `while`    | Loop                            |
| `do`       | Used with `do...while`          |
| `break`    | Exit a loop or switch           |
| `continue` | Skip the current iteration      |
| `function` | Declare a function              |
| `return`   | Return a value from a function  |
| `class`    | Create a class                  |
| `new`      | Create an object                |
| `try`      | Start exception handling        |
| `catch`    | Handle errors                   |
| `finally`  | Always runs after `try`/`catch` |
| `throw`    | Throw an error                  |
| `import`   | Import modules                  |
| `export`   | Export modules                  |


✅Keywords vs Identifiers

| Keyword                  | Identifier                                       |
| ------------------------ | ------------------------------------------------ |
| Reserved by JavaScript   | Chosen by the programmer                         |
| Has a predefined meaning | Used to name variables, functions, classes, etc. |
| Cannot be used as names  | Must follow JavaScript naming rules              |


//Easy Way to Remember

Imagine JavaScript is a classroom:

👨‍🏫 Keywords are the teacher's commands: "Sit", "Stand", "Read". They already have fixed meanings.
🧑‍🎓 Identifiers are the students' names: "Raju", "Rahim", "Karim". You choose these names.














*/