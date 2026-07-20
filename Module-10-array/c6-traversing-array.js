/* 


✅✅What is Array Traversing?
Array traversing means visiting or accessing each element of an array one by one.

✅Why do we need it?
We traverse an array when we want to:

 Print all elements
 Find the sum
 Find the maximum/minimum
 Search for an element
 Count even/odd numbers
 Modify elements


✅✅ There are 3 methods : 

| Method     | Gives         | Best For                                            |
| ---------- | ------------- | --------------------------------------------------- |
| `for`      | Index & Value | General array processing                            |
| `for...of` | Value         | Reading array values                                |
| `for...in` | Index         | Objects (can work with arrays, but not recommended) |



✅1. for Loop (Most Common)

let nums = [10, 20, 30, 40];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

Output:
10
20
30
40


✅2.for...of
for...of gives you the values directly.


let nums = [10, 20, 30, 40];
for (let num of nums) {
    console.log(num);
}

Output:
10
20
30
40



✅3. for...in
for...in gives you the indexes. It's mainly intended for objects; 

let nums = [10, 20, 30];
for (let index in nums) {
    console.log(index, nums[index]);
}

Output:

0 10
1 20
2 30






















*/