
/* 
✅✅What is Array Reversing?
Array reversing means changing the order of the elements so that the first element becomes the last, the second becomes the second last, and so on.

Example
let arr = [1, 2, 3, 4, 5];

After reversing: [5, 4, 3, 2, 1]



✅Method 1: Using reverse() (Built-in)

let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

Output
[5, 4, 3, 2, 1]


✅Method 2:Using unshift() 
Idea: Traverse from left to right and insert each element at the beginning of a new array.


let arr = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = 0; i < arr.length; i++) {
    reversed.unshift(arr[i]);
}
console.log(reversed);

Output:
[5, 4, 3, 2, 1]


✅Method 3:Using length (Loop Backwards) 
Idea: Start from the last index and move to the first.

let arr = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
console.log(reversed);

Output:
[5, 4, 3, 2, 1]


*/