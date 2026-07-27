// problem -11 : Find sumOfArray and average.

function sumOfArray(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum= sum +arr[i];
    }
    console.log("Sum of the array is :",sum);
    
    return sum/arr.length ;
}
console.log( "Avg is : ", sumOfArray([52,61,6,1,78,16,2,91,60]));






// problem-12 : filter number- greater than a given number.

function filterNum(arr,n){
    let filtered = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>n){
            filtered.push(arr[i]);
        }
    }
    console.log("Numbers greater than ",n, ":");  
    return filtered;
}
console.log(filterNum([52,61,6,1,78,16,2,91,60], 50));
