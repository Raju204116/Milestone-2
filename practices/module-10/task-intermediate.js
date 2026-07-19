
//✅ 1. Combine two arrays into one new array. Log the result.

// let num1=[1,2,3,4,5];
// let num2=[11,12,13,14];
// let allNum=num1.concat(num2);
// console.log("Concatanation  of two array : ", allNum);


//✅ 2. Take a portion of an array (not the whole thing) without changing the original. Log the result.

// let num1=[1,2,3,4,5];
// console.log(num1.slice(2,4));
// console.log("Original Array after slicing : ",num1);

//✅ 3. Turn an array of words into a single sentence string.
// Expected: a string like "word word word"

// let name= ['md','raju', 'ahammed'];
// console.log(name.join(' '));


//✅ 4. Check two variables (one array, one not) and log whether each is an array.
// Expected: true then false, or false then true depending on order

// let num1=[1,2,3,4,5];
// let num2=50;

// console.log(Array.isArray(num1));
// console.log(Array.isArray(num2));



//✅ 5. Reverse an array of at least 5 items. Log the result.

// const arr = [10,20,30,40,50];
// console.log(arr.reverse());


//✅ 6. Sort an array of names alphabetically. Log the result.

// const name = ['raju', 'abdullah', 'jony', 'hamid'];
// console.log(name.sort());



//✅ 7. Sort an array of numbers in ascending order, keeping numeric order correct (not string order).

// let nums= [10,5,50,20,32,7,12,78,98,62,80];
// console.log(nums.sort()); //it will give wrong ans , because js sorts numbers as string, not numerically.

//correct version:
// let nums= [10,5,50,20,32,7,12,78,98,62,80];
// nums.sort((a,b)=>a-b);    //let a=10, b=5 , then a-b=10-5=5 => positive, then it will sort b before a;  for result = negative, sort a before b
// console.log(nums);



//✅ 8. Given an array of numbers, log only the values greater than 10, using a loop.

// let nums= [10,5,50,20,32,7,12,78,98,62,80];
// for(let i=0;i<=nums.length;i++){
//     if(nums[i]>10){
//         console.log(nums[i]);
//     }
// }



//✅ 9. Given an array of numbers, calculate and log the total sum, using a loop.

let nums= [10,5,50,20,32,7,12,78,98,62,80];
let sum=0;
for(let i=0;i<nums.length;i++){   //i<=nums.length  dile , result error hobe, sum = NaN 
    sum +=nums[i];
}
console.log("Sum is : ",sum);