/* ✅✅Task 14-9: Final Homework Set (Module Summary)
Each task below has one hidden bug. Use the full checklist from 14-10: run it, find the error type, isolate with console.log or breakpoints, fix one bug at a time.
✅14-9A: Temperature Converter
Problem Statement: Should convert Celsius to Fahrenheit using the formula (C × 9/5) + 32.
Input : 0
Expected Output : 32

Buggy Code:
function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 3; // find the bug
}
 
console.log(celsiusToFahrenheit(0)); // Expected: 32


✅14-9B: Array Sum Skips a Number
Problem Statement: Should return the sum of all numbers in the array.
Input : [1, 2, 3, 4]
Expected Output :10

Buggy Code:
function sumArray(numbers) {
  let total = 0;
 
  for (let i = 1; i < numbers.length; i++) { // find the bug
    total = total + numbers[i];
  }
 
  return total;
}
 
console.log(sumArray([1, 2, 3, 4])); // Expected: 10



✅14-9C: String Repeat
Problem Statement: Should return a string repeated a given number of times.
Input : "ab", 3
Expected Output :"ababab"


Buggy Code:
function repeatString(str, times) {
  let result = "";
 
  for (let i = 0; i < times; i++) {
    result = str; // find the bug
  }
 
  return result;
}
 
console.log(repeatString("ab", 3)); // Expected: "ababab"




✅14-9D: Object Property Update
Problem Statement: Should update a person's age property and return the updated object.
Input : { name: "Lee", age: 20 }, 21
Expected Output :{ name: "Lee", age: 21 }

Buggy Code:
function updateAge(person, newAge) {
  person.age = person; // find the bug
  return person;
}
 
console.log(updateAge({ name: "Lee", age: 20 }, 21));
// Expected: { name: "Lee", age: 21 } */