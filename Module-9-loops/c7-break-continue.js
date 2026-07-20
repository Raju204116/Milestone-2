
/* 



✅✅break vs continue

| Feature                       | `break` | `continue` |
| ----------------------------- | ------- | ---------- |
| Stops the loop                | ✅ Yes   | ❌ No       |
| Skips current iteration       | ❌ No    | ✅ Yes      |
| Continues with next iteration | ❌ No    | ✅ Yes      |



✅break
The break statement immediately stops the loop.

Syntax:

break;

Example 1:
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

Output:
1
2
3
4
5


Example 2: Stop When Number is Found

let nums = [10, 20, 35, 40, 50];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 35) {
        console.log("Found!");
        break;
    }
}

Output:

Found!

⚠️This is efficient because once the number is found, there's no need to continue checking the rest of the array.





✅continue
The continue statement skips the current iteration and moves to the next one.

Syntax:
continue;

Example 1:
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

Output:
1
2
4
5

⚠️Notice that 3 is skipped, but the loop continues with 4.

Example 2: Print Only Odd Numbers

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

Output:
1
3
5
7
9

⚠️Even numbers are skipped.











*/


//⚠️⚠️ Coding example : do the practice task