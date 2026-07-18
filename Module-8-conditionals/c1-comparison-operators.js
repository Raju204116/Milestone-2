
/* 
✅What are Comparison Operators?
A comparison operator compares two values.
The result is always:
true/ false

✅Why Are Comparison Operators Important?

1.Making decision
2.Power logic
3.Filter Data
4.Drive loops

Imagine these situations:

Can a user log in?
Did the student pass the exam?
Is the customer eligible for a discount?
Is the password correct?
Is the user 18 years or older?

All of these require a comparison.




✅Comparison Operators in JavaScript

| Operator | Meaning                  | Example     | Result  |
| -------- | ------------------------ | ----------- | ------- |
| `>`      | Greater than             | `10 > 5`    | `true`  |
| `<`      | Less than                | `5 < 10`    | `true`  |
| `>=`     | Greater than or equal to | `18 >= 18`  | `true`  |
| `<=`     | Less than or equal to    | `10 <= 5`   | `false` |
| `==`     | Equal (loose equality)   | `5 == "5"`  | `true`  |
| `===`    | Strict equality          | `5 === "5"` | `false` |
| `!=`     | Not equal (loose)        | `5 != "5"`  | `false` |
| `!==`    | Strict not equal         | `5 !== "5"` | `true`  |





⚠️Equality Operators

This is the part that confuses many beginners.

== (Loose Equality)
Checks whether the values are equal after type conversion if needed.

console.log(5 == "5");  //true


=== (Strict Equality)
Checks both:
value & data type

console.log(5 === "5");  //false

✅ Best Practice
Always prefer === and !== unless you have a specific reason to use == or !=.




*/

//Example:
// Without running the code, predict the output:

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");

console.log(true == 1);
console.log(true === 1);

console.log(false == 0);
console.log(false === 0);

console.log(null == undefined);
console.log(null === undefined);

console.log("10" > 5);