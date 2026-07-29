/* ✅Task 13-9: Long Words Above a Length, Then Their Count
Problem Statement:
Write two functions:
● getWordsLongerThan — takes an array of words and a length threshold, and returns a new array 
containing every word whose length is greater than the threshold.

● countArray — takes an array and returns how many elements it contains.
Use the returned array from getWordsLongerThan as the input to countArray. 
*/

// First function :
// Input: an array of words, a length threshold
// Output: array of words longer than the threshold
// Returns: an array

function getWordsLongerThan(arr,threshold){
    let thresholdArr= [];
   
    for(let i=0;i<arr.length;i++){
        if(arr[i].length > threshold){
            thresholdArr.push(arr[i]);
        }
    }
    return thresholdArr;
}

// Second function :
// input : an array
// output : no of elements count
// return : a number

function countArray(arr){
    return arr.length ;
}

let wordsArr=["cat", "elephant", "dog","hippopotamus", "ox"];
let longWordsArr= getWordsLongerThan(wordsArr, 3); 
console.log(longWordsArr);// Expected: ["elephant", "hippopotamus"]

let count=countArray(longWordsArr);
console.log("No of elements :",count); // Expected: 2
