
// problem-9 : Find the largest value in an array

function findLargest(arr) {
    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log("Largest Num is :",findLargest([54, 62, 12, 34, 95, 15, 5, 64]));





// problem-10 : Find the smalles value in an array

function findSmallest(arr) {
    let smallest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log("Smallest Num is :",findSmallest([54, 62, 12, 34, 95, 15, 5, 64]));