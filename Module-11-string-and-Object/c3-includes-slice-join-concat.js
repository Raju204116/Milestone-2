
/* 


✅✅Summary table:

| Method       | Purpose                  | Returns          |
| ------------ | ------------------------ | ---------------- |
| `includes()` | Check if text exists     | `true` / `false` |
| `slice()`    | Extract part of a string | New string       |
| `concat()`   | Join strings             | New string       |
| `split()`    | String → Array           | Array            |
| `join()`     | Array → String           | String           |


✅1. includes()
Checks whether a string contains a specific substring.

Syntax
string.includes(searchValue)

Example
let str = "I love JavaScript";
console.log(str.includes("Java")); // true
console.log(str.includes("Python")); // false

console.log(str.endsWith(".pdf")); //false
console.log(str.endsWith(".jpg")); //false


✅2. slice()
Extracts part of a string and returns a new string.

Syntax
string.slice(start, end)
start → Included
end → Excluded

Example
let str = "JavaScript";
console.log(str.slice(0, 4));

Output : Java

⚠️Negative index:
console.log(str.slice(-6));

Output:  Script



✅3. concat()
Joins two or more strings.

Syntax
string1.concat(string2)

Example
let first = "Hello";
let second = "World";

console.log(first.concat(second));
console.log(first.concat(" ", second));
console.log(first.concat(" ", second, " Omg!"));


Outputs : 
HelloWorld
Hello World
Hello World Omg!

⚠️Note: Most developers prefer using the + operator or template literals instead of concat().

console.log(first + " " + second);
console.log(`${first} ${second}`);



✅4. split()
Converts a string into an array.

Syntax
string.split(separator)

Example 1
let str = "apple banana mango";

console.log(str.split("")); //split every character
console.log(str.split(" ")); //split by space
console.log(str.split("a")); //split by a  i.e. a paile alada kore dibe. 


Outputs : 
['a', 'p', 'p', 'l', 'e',',', 'b', 'a', 'n', 'a','n', 'a', ',', 'm', 'a','n', 'g', 'o']
[ 'apple', 'banana', 'mango' ]
[ '', 'pple b', 'n', 'n', ' m', 'ngo' ]





✅5. join() (Array Method)
Converts an array into a string.

Syntax
array.join(separator)

Example
let arr = ["HTML", "CSS", "JavaScript"];
console.log(arr.join(" "));

Output : HTML CSS JavaScript


Another example:
let arr = ["A", "B", "C"];
console.log(arr.join("-"));

Output : A-B-C

⚠️split() vs join()

| Method    | Input  | Output |
| --------- | ------ | ------ |
| `split()` | String | Array  |
| `join()`  | Array  | String |



*/

