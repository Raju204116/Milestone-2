/* 

| Method     | Purpose              | Original Array |
| ---------- | -------------------- | -------------- |
| `sort()`   | Sort elements        | ✅ Modified     |
| `slice()`  | Copy/extract part    | ❌ Not modified |
| `splice()` | Add, remove, replace | ✅ Modified     |



✅✅1. sort()
Purpose : Sorts the elements of an array.

Syntax
array.sort()

Example 
✅(Strings)

let fruits = ["Mango", "Apple", "Banana"];
fruits.sort();
console.log(fruits);

Output
["Apple", "Banana", "Mango"]

✅Numbers (Important)

let nums = [10, 5, 100, 25];
nums.sort();
console.log(nums);

Output
[10, 100, 25, 5] ❌

Why?
Because JavaScript compares them as strings by default.

⭐Correct Way

Ascending:
nums.sort((a, b) => a - b);

Output:
[5, 10, 25, 100]

Descending:
nums.sort((a, b) => b - a);

Output:
[100, 25, 10, 5]

Note: sort() modifies the original array.


✅✅2. slice()
Purpose : Extracts part of an array.
Returns a new array.
Does not change the original array.

Syntax
array.slice(start, end)
start → Included
end → Excluded


Example
let nums = [10, 20, 30, 40, 50];
let result = nums.slice(1, 4);
console.log(result);

Output
[20, 30, 40]

Original array:
[10, 20, 30, 40, 50]



✅✅3. splice()
Purpose: Adds, removes, or replaces elements.
Important: splice() changes the original array.

Syntax
array.splice(start, deleteCount, item1, item2, ...)

✅Remove Elements

let nums = [10, 20, 30, 40, 50];
nums.splice(2, 2);
console.log(nums);

Output
[10, 20, 50]

Removed: 30 40


✅Add Elements

let nums = [10, 20, 50];
nums.splice(2, 0, 30, 40);
console.log(nums);

Output
[10, 20, 30, 40, 50]

Explanation:
Start at index 2
Remove 0 elements
Insert 30 and 40



✅Replace Elements

let nums = [10, 20, 30, 40];
nums.splice(1, 2, 99);
console.log(nums);

Output
[10, 99, 40]

Explanation:
Start at index 1
Remove 20 and 30
Insert 99


✅✅slice() vs splice()

| Feature                | `slice()`    | `splice()`           |
| ---------------------- | ------------ | -------------------- |
| Changes original array | ❌ No         | ✅ Yes                |
| Returns                | New array    | Removed elements     |
| Purpose                | Copy/extract | Add, remove, replace |



*/