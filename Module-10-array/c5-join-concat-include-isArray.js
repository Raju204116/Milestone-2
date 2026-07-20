/* 
✅✅Searching Elements

✅includes()

let fruits = ["Apple", "Banana"];
console.log(fruits.includes("Banana"));

Output:true


✅indexOf()

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.indexOf("Mango"));

Output:2

If the value isn't found:-1



✅isArray()
Checks whether a value is an array.
Returns true or false.

Syntax:
Array.isArray(value)

Example:

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("Hello"));   // false
console.log(Array.isArray(10));        // false
console.log(Array.isArray({}));        // false

Why use it?
typeof [1,2,3] returns "object", so use Array.isArray() to correctly identify arrays.




✅✅Joining Elements

✅join()

let words = ["I", "love", "JavaScript"];
console.log(words.join(" "));

Output:
I love JavaScript

✅concat()

Combines two or more arrays into a new array.
Does not modify the original arrays.

Syntax:
array1.concat(array2)

Example:

let a = [1, 2];
let b = [3, 4];

let c = a.concat(b);
console.log(c); // [1, 2, 3, 4]





*/