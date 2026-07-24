
/* 
✅✅What is return?
The return statement ends a function and sends a value back to the place where the function was called.

⚠️Without return, a function returns undefined by default.


✅Why Do We Need return?
Suppose you calculate the sum of two numbers.

// Without return:

function add(a, b) {
    let sum=a+b;
}
let result = add(10, 20);
console.log(result);

Output: undefined


// With return:

function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);

Output: 30


✅✅Types of Returns


| Example                    || Return Type 
|--------------------------  || ----------- 
| `return 100;`              || Number      
| `return "Hello";`          || String      
| `return true;`             || Boolean     
| `return [1, 2, 3];`        || Array       
| `return { name: "Raju" };` || Object      
|  No `return` statement     || `undefined` 


✅1. Return a Number

function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// Output:30


✅2. Return a String

function greet(name) {
    return "Hello " + name;
}
console.log(greet("Raju"));

// Output: Hello Raju


✅3. Return a Boolean

function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(8));
console.log(isEven(5));

// Output :
true
false


✅4. Return an Array

function getColors() {
    return ["Red", "Green", "Blue"];
}
console.log(getColors());

// Output:
["Red", "Green", "Blue"]

✅5. Return an Object

function getStudent() {
    return {
        name: "Raju",
        age: 25
    };
}
console.log(getStudent());

// Output :
{ name: "Raju", age: 25 }


✅6. Return Nothing (undefined)

⚠️If you don't write a return statement, JavaScript automatically returns undefined.

function hello() {
    console.log("Hello");
}
let result = hello();
console.log(result);

// Output
Hello
undefined


✅7. Return Early

⚠️return immediately stops the function.

function checkAge(age) {
    if (age < 18) {
        return "Not Allowed";
    }
    return "Allowed";
}
console.log(checkAge(15));
console.log(checkAge(20));

// Output:
Not Allowed
Allowed

⚠️⚠️Once return Runs, the Function Ends

When JavaScript reaches a return statement:
-It immediately returns the specified value.
-It exits the function.
❌ Any code after return inside that function is not executed.

// Example 1

function greet() {
    console.log("Hello");
    return;
    console.log("Welcome");
}
greet();

Output: Hello

Why?
Execution stops at return, so console.log("Welcome") never runs.


✅✅return vs console.log()

Many beginners confuse these.

console.log() 
⚠️Prints something to the console. Does not send a value back.

function square(num) {
    console.log(num * num);
}
let result = square(5);
console.log(result);

Output
25
undefined


✅Conditional return

function isEven(num){
    if(num%2===0){
        return true;
    }else
        return false;
}
console.log(isEven(5));
console.log(isEven(6));



*/


function isEven(num){
    if(num%2===0){
        return true;
    }else
        return false;
}
// console.log(isEven(5));
// console.log(isEven(6));




// if no return, will show undefined
function isEven(n){
    if(n%2===0){
        return true;
    }
        
}
console.log(isEven(5)); //undefined ; because else has no return
console.log(isEven(6));
