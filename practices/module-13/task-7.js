/* ✅Task 13-7A: Average of All Numbers
Problem Statement:
Write a function averageOfArray that takes an array of numbers and returns
their average. */

// input : an array
// output : average of array
// return : a number

function averageOfArray(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum =sum + arr[i];
    }

    return sum/arr.length ;
}

console.log("Average :",averageOfArray([2, 4, 6])); //expected : 4



/* ✅Task 13-7B: Keep Only Even Numbers
Problem Statement:
Write a function keepEvenNumbers that takes an array of numbers and
returns a new array with only the even numbers */

// input: an array
// output : even array
// returns : an array

function keepEvenNumbers(arr){
    let evenArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}
console.log("EvenArray :",keepEvenNumbers([3, -5, 8, -1, 0]));// Expected: [8, 0]

