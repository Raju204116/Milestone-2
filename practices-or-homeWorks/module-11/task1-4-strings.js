 /* 
✅Task 1.1 — Spot the Difference
let str = "hello";
let arr = ["h", "e", "l", "l", "o"];
● Log str.length and arr.length. What do you notice?
● Try str[0] and arr[0]. Do both work the same way?
● Try str.push("!") — what happens? Why does this fail for strings but not arrays?
*/

// let str = "hello";
// let arr = ["h", "e", "l", "l", "o"];

// console.log(str.length); //5
// console.log(arr.length); //5

// console.log(str[0],arr[0]); // h h 

// // str.push("!");
// console.log(str); //str.push is not a function

// arr.push("!");
// console.log(arr); //[ 'h', 'e', 'l', 'l', 'o', '!' ]


//push() fails to string because string doesn't have a push()method, 
// on the other hand, Array belongs to push() method.






/* ✅Task 1.2 — Convert Between Them
● Convert the string "JavaScript" into an array of characters.
● Convert the array ["c", "a", "t"] back into a single string "cat".
 */

// let str= "JavaScript";
// console.log(str.split("")); //['J', 'a', 'v', 'a','S', 'c', 'r', 'i','p', 't']


// let arr= ["c", "a", "t"];
// console.log(arr.join()); //c,a,t
// console.log(arr.join("")); //cat
// console.log(arr.join(" "));  // "c a t"




/* ✅Task 2.1 — Case Conversion
let name = "JavaScript";
● Print the uppercase version.
● Print the lowercase version.
● Print the string with whitespace trimmed: " hi there " → "hi there"
 */

// let name = "JavaScript";

// console.log(name.toUpperCase()); //JAVASCRIPT
// console.log(name.toLowerCase()); //javascript

// let str= " hi there ";
// console.log(str.trim()); //hi there




/* ✅Task 3.1 — Slicing Strings
let sentence = "Learning JavaScript is fun!";
● Get just the word "Learning" using .slice().
● Get the last 4 characters ("fun!") using .slice() with a negative index.
*/

// let sentence = "Learning JavaScript is fun!";

// console.log(sentence.slice(0,9)); //Learning

// console.log(sentence.slice(-4)); //fun!






/* ✅Task 3.2 — Combine Strings
● Use .concat() to join "Hello" and "World" into "Hello World".
● Use + and template literals to do the same thing. Compare all three approaches.
 */

// let str1 = "Hello";
// let str2 = "World";

// console.log(str1.concat(" ",str2)); //Hello World

// console.log(str1 + " "+ str2);  //Hello World

// console.log(`${str1} ${str2}`); //Hello World

//⚠️ A template literal is a string,  written using backticks (`) instead of single (') or double (" ) quotes.



/* ✅Task 4.1 — Three Reversal Methods
Write a function reverseString(str) in three different ways:
● Using .split(""), .reverse(), and .join("")
● Using a for loop that builds the reversed string character by character
● Using traditional for loop.
Test all three with "JavaScript" → should return "tpircSavaJ"

#mention which method do you think is fastest ? why?
*/
 
const mainStr= "JavaScript"


// method-1 : split, reverse, join
function reverseString1(str){
    let reversed1 = "";  //declare it inside the function, so  the function become reusable
    reversed1 = str.split("");
    reversed1 = reversed1.reverse();
    reversed1 = reversed1.join("");
    // reversed1 = str.split("").reverse().join("");  //shorthand
    return reversed1;
}
console.log(reverseString1(mainStr)); //tpircSavaJ



// method-2 : for.. of
function reverseString2(str){
    let reversed2=""; 
    for(let elements of str){
        reversed2= elements + reversed2;
    }
    return reversed2;
}
console.log(reverseString2(mainStr)); //tpircSavaJ


// method-3 : general for loop
function reverseString3(str){
    let reversed3= "";
    for(let i=0;i<str.length; i++){
        reversed3= str[i] + reversed3;
    }
    return reversed3;
}
console.log(reverseString3(mainStr)); //tpircSavaJ



/* 
Which Method is Fastest?
🥇 Method 3 (Traditional for loop)

Usually the fastest because:

 No extra arrays are created.
 No built-in methods (split(), reverse(), join()) are called.
 It directly reads characters and builds the result.

*/