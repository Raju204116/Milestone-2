
//✅ 1. Given an array of numbers, remove duplicates and log the unique values only.

// let nums=[10,50,30,60,40,52,50,40,98,63,60,]
// let unique= [];

// for(let i=0;i<nums.length;i++){
//     if(!unique.includes(nums[i])){
//         unique. push(nums[i]);
//     }
// }
// console.log("without duplicate values : ",unique);



//✅ 2. Given an array of mixed values (numbers and strings), separate them into two arrays and log both.

// let arr= [1, 'a','b','c',4,6,8,'f',9,2,'d',10];

// let str=[];
// let nums=[];

// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i] === "string"){
//         str.push(arr[i]);
//     }else
//         nums.push(arr[i]);
// }
// console.log("String values : ", str);
// console.log("Number values : ", nums);


// //console.log(typeof String);  //function
// //console.log(typeof "string"); //string





//✅ 3. Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly 
// on the whole array (use a loop).


// let nums = [20,54,60,4,8,929,820,20,40,60]

// let max=nums[0];
// let min=nums[0];

// for(i=0;i<nums.length;i++){
//     if(max < nums[i]){
//         max=nums[i];
//     }

//     if(min>nums[i]){
//         min=nums[i];
//     }
// }
// console.log("Max num is : ", max);
// console.log("Min num is : ", min);




//✅ 4. Flatten a nested array (array containing arrays) into a single flat array.
// Expected: [1,2,3,4,5,6] from something like [1,[2,3],[4,[5,6]]]

//NB: this is a problem of recursion, so I need to skip it now. Instead of this do this : [1,[2,3],[4,5]]


// // let nestedArr = [1,[2,3],[4,[5,6]]]  //this needs function
// let nestedArr = [1,[2,3],[4,5]];
// let flatArr=[];

// for(let i=0;i<nestedArr.length;i++){
//     if(Array.isArray(nestedArr[i])){
//         for(let j=0;j<nestedArr[i].length;j++){
//             flatArr.push(nestedArr[i][j]);         
//         }

//     }else
//         flatArr.push(nestedArr[i]);
// }
// console.log(flatArr);



//✅ 5. Rotate an array left by one position (first item moves to the end). Log the result.
// Expected: [2,3,4,5,1] from [1,2,3,4,5]

let arr= [1,2,3,4,5];

let first = arr.shift();
arr.push(first);

console.log(arr);


