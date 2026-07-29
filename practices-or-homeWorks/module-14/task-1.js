/* 
✅  ❌ ⚠️
✅✅Practice Tasks (Find the Bug, Fix It) 
Instructions:
-Run the code first and see what actually happens.
-Write a one-line comment explaining what the bug is, before fixing it.
-Fix the bug so the output matches the "Expected Output."
-Every function must still return its answer (not just console.log it).


✅Task 14-1: Spot the Error Type
Below are three small broken snippets. For each, identify the error type (Syntax / Runtime / Logic), then fix it.

Snippet A
function sayHi(name) {
  console.log("Hi, " + name  // find the bug
} 
sayHi("Mira");

Input : sayHi("Mira")
Expected Output : Hi, Mira
*/


// Snippet A  
function sayHi(name) {
  console.log("Hi, " + name ) // find the bug : SyntaxError: missing ) after argument list 
} 
sayHi("Mira");




/* Snippet B
let word = "hello";
console.log(word.toUppercase()); // find the bug

Input : word.toUppercase()
Expected Output : HELLO */

// Snippet B  
let word = "hello";
console.log(word.toUpperCase()); // find the bug : TypeError: word.toUppercase is not a function //(small c in case)




/* 
Snippet C
function square(num) {
  return num + num; // find the bug
}
console.log(square(4)); // expected 16

Input : square(4)
Expected Output :16 */

// Snippet C
function square(num) {
  return num * num; // find the bug : logical error : it should be * instead of +
}
console.log(square(4)); // expected 16




/* Starter Snippet (fix all three below):

// Bug type: ___
function sayHi(name) {
  console.log("Hi, " + name)
}
sayHi("Mira");
 
// Bug type: ___
let word = "hello";
console.log(word.toUppercase());
 
// Bug type: ___
function square(num) {
  return num + num;
}
console.log(square(4)); 
*/



// Starter Snippet (fix all three below):
// Bug type: ___Syntax Error
function sayHi2(name) {
  console.log("Hi, " + name);
}
sayHi2("Mira");

 
// Bug type: ___Syntax error : (typeError)
let word2 = "hello";
console.log(word2.toUpperCase());
 
// Bug type: ___Logical error
function square2(num) {
  return num * num;
}
console.log(square2(4));