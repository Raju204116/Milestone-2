
/* *

✅What is a Loop?
A loop is a way to repeat a block of code multiple times until a condition becomes false.

✅Why Do We Need Loops?
Imagine you want to print numbers from 1 to 1000.

//Without loops:

console.log(1);
console.log(2);
console.log(3);
 ...
console.log(1000);
Impossible!


//With a loop:

for (let i = 1; i <= 1000; i++) {
    console.log(i);
}


✅✅✅Types of Loops in JavaScript

There are five common loops:

| Loop             | Syntax                         | Best Used For                              | Stops When                            |
| ---------------- | ------------------------------ | ------------------------------------------ | ------------------------------------- |
| for              | `for(init; condition; update)` | When you know how many times to repeat     | Condition becomes `false`             |
| while            | `while(condition)`             | When the number of iterations is unknown   | Condition becomes `false`             |
| do...while       | `do { } while(condition)`      | When the code must run at least once       | Condition becomes `false`             |
| for...of         | `for (let item of iterable)`   | Iterating over arrays, strings, maps, sets | All elements are visited              |
| for...in         | `for (let key in object)`      | Iterating over an object's property names  | All enumerable properties are visited |



✅1. for Loop

Syntax:
for (initialization; condition; update) {
    // code
}

Example:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


✅2. while Loop

A while loop repeats as long as the condition is true.

Syntax:
while (condition) {
    // code
}


Example:
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

⚠️Be careful : Infinite Loop

let i = 1;
while (i <= 5) {
    console.log(i);
}

Without i++, i never changes, so the condition is always true.


✅3. do...while

The body runs at least once, even if the condition is false.

Syntax:
do {
    // code
} while (condition);

Example:
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);



✅4. for...of
Use this when you want the values.

let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

Output : 

Apple
Banana
Mango




✅5. for...in
Use this when you want the property names (keys) of an object.

let student = {
    name: "Raju",
    age: 25,
    country: "Bangladesh"
};

for (let key in student) {
    console.log(key, student[key]);
}

Output : 

name Raju
age 25
country Bangladesh




*/



// ⚠️ Coding Example : do the practice task