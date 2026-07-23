
/* 

✅✅What is String Reversing?
String reversing means changing the order of characters.

Example:
"hello" = "olleh"

⚠️ Remember
A string cannot be reversed directly because strings are immutable.



✅Method 1: Using split(), reverse(), and join() (Easiest)

let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed);

Output : olleh


⚠️How it works
input: "hello"
.split("") : ["h", "e", "l", "l", "o"]
.reverse() : ["o", "l", "l", "e", "h"]
.join("") :  "olleh"

✅Method 2: Using a Loop (Interview Friendly)

let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

Output : olleh


✅Method 3: Using for...of  
Since strings are immutable, first convert the string into an array.

let str = "hello";
let reversed= " " ;
for (let letter of str) {
    reversed = letter + reversed ;
    console.log(letter, "=>", reversed);
}
console.log("Final : ",reversed);

Output : olleh








*/

