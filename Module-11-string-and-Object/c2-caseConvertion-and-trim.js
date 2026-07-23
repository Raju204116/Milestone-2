
/* 


✅✅1. String Comparison

Strings can be compared using comparison operators.

let a = "apple";
let b = "banana";

console.log(a === b); // false
console.log(a < b);   // true
console.log(a > b);   // false

✅How JavaScript Compares Strings
JavaScript compares strings alphabetically (lexicographically) using Unicode values.

console.log("Apple" < "Banana"); // true
console.log("cat" > "bat");      // true

⚠️Important: String comparison is case-sensitive.
   console.log("apple" === "Apple"); // false



✅✅2. toLowerCase()
Converts all letters to lowercase.

Syntax
string.toLowerCase()

Example
let name = "RAJU";
console.log(name.toLowerCase());

Output : raju


✅✅3. toUpperCase()
Converts all letters to uppercase.

Syntax
string.toUpperCase()

Example
let country = "bangladesh";
console.log(country.toUpperCase());

Output: BANGLADESH


⚠️Why Use toLowerCase() / toUpperCase()?
To compare strings without worrying about letter case.

let input = "RAJU";
let username = "raju";
console.log(input.toLowerCase() === username.toLowerCase());

Output: true




✅✅4. trim()
Removes whitespace from the beginning and end of a string.
It does not remove spaces in the middle.

Syntax
string.trim()

Example
let name = "  Hello Raju   ";
console.log(name.trim());

Output: Hello Raju  //middle space remains and it is unchangable

⚠️create account/form fillup

let email = "  RAJU@gmail.com  ";
let cleanEmail = email.trim().toLowerCase();
console.log(cleanEmail);

Output : raju@gmail.com



✅trimStart()
Removes whitespace from the beginning (left side) of a string.

Syntax
string.trimStart()

Example
let str = "   Hello World";
console.log(str.trimStart());

Output: "Hello World"

✅trimEnd()
Removes whitespace from the end (right side) of a string.

Syntax
string.trimEnd()

Example
let str = "Hello World   ";
console.log(str.trimEnd());

Output: "Hello World"

✅✅Difference

| Method        | Removes Spaces From    |
| ------------- | ---------------------- |
| `trimStart()` | Beginning (left)       |
| `trimEnd()`   | End (right)            |
| `trim()`      | Both beginning and end |



*/