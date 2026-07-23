
/* 
✅✅What is a String?
A string is a sequence of characters used to store text.

Examples:
let name = "Raju";
let country = 'Bangladesh';
let message = `Hello World`;

✅Why Do We Use Strings?
Strings are used to store text such as:

Names
Email addresses
Messages
Passwords
Cities
Sentences

Example:
let name = "Raju";
let email = "raju@gmail.com";
let city = "Dhaka";


✅Ways to Create Strings : 3 way

1. Double Quotes
let name = "Raju";
2. Single Quotes
let name = 'Raju';
3. Backticks (Template Literals)
let name = `Raju`;

⚠️Backtick is Useful for variables and multiline strings:

let name = "Raju";
console.log(`Hello ${name}`);


✅Access Characters
A string uses indexes [], just like an array.

let str = "Hello";
console.log(str[0]); // H
console.log(str[1]); // e
console.log(str[4]); // o

✅String Length

let str = "Bangladesh";
console.log(str.length);

Output: 10




✅✅String vs Array

| Feature  | String            | Array           |
| -------- | ----------------- | --------------- |
| Stores   | Characters (text) | Any data type   |
| Mutable? | ❌ No (Immutable) | ✅ Yes (Mutable) |
| Indexing | Yes               | Yes           |
| Length   | .length           | .length       |
|Traversing | Yes               | Yes           |


| Operation      | String       | Array        |
| -------------- | ------------ | ------------ |
| Access element | `str[0]`     | `arr[0]`     |
| Length         | `str.length` | `arr.length` |
| Modify element | ❌ No         | ✅ Yes        |
| Add element    | ❌ No         | ✅ `push()`   |
| Remove element | ❌ No         | ✅ `pop()`    |



✅String Methods
toUpperCase()
toLowerCase()
trim()
includes()
slice()
replace()
split()

✅Array Methods
push()
pop()
shift()
unshift()
splice()
concat()
sort()
reverse()
includes()
slice()


*/