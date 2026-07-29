
//✅ 1. Create an array with 3 items of your choice. Log it.
// Expected: array with your 3 items printed

// let arr1= ['raj', 'dhaka', 'gazipur'];
// console.log(arr1);



//✅ 2. Log the length of the array from Task 1.
// Expected: 3


// let arr1= ['raj', 'dhaka', 'gazipur'];
// console.log(arr1.length);



//✅ 3. Log the item at index 0 and index 2 of the array.

// let arr1= ['raj', 'dhaka', 'gazipur'];
// console.log(arr1[0]);
// console.log(arr1[2]);




//✅ 4. Change the item at index 1 to a new value. Log the array.

// let arr1= ['raj', 'dhaka', 'gazipur'];
// arr1[1]="rangpur";
// console.log(arr1)


//✅ 5. Add one item to the end of the array. Log the array.

// let arr1= ['raj', 'rangpur', 'gazipur'];
// arr1.push('barishal');
// console.log(arr1);


//✅ 6. Remove the last item from the array. Log the array and the removed value.

// let arr1=[ 'raj', 'rangpur', 'gazipur', 'barishal' ];
// arr1.pop();
// console.log(arr1);



//✅ 7. Add one item to the start of the array. Log the array.

// let arr1=[ 'raj', 'rangpur', 'gazipur' ];
// arr1.unshift('sylhet');
// console.log(arr1);



//✅ 8. Remove the first item from the array. Log the array and the removed value.

// let arr1=[ "sylhet", 'raj', 'rangpur', 'gazipur' ];
// arr1.shift();
// console.log(arr1);


//✅ 9. Check whether the array contains a specific value. Log true or false.

// let arr1=[  'raj', 'rangpur', 'gazipur' ];
// console.log(arr1.includes("dhaka"));

//✅ 10. Find the position of a specific value in the array. Log the number.

// let arr1=[  'raj', 'rangpur', 'gazipur' ];
// console.log(arr1.indexOf('rangpur'));


//✅ 11. Loop through the array with a for loop and log each item.

//for of

// let arr1=[  'raj', 'rangpur', 'gazipur' ];
// for(const elements of arr1){
//     console.log('Item is : ',elements);
// }




//for loop

// let arr1=[  'raj', 'rangpur', 'gazipur' ];

// for(let i=0;i<arr1.length;i++){
//     console.log('Value of index ',i , ": ", arr1[i]);
// }


//✅ 12. Loop through the array with a while loop and log each item.

let arr1=[  'raj', 'rangpur', 'gazipur' ];
let i=0;
while(i<arr1.length){
    console.log('Value of index ',i , ": ", arr1[i]);
    i++;
}