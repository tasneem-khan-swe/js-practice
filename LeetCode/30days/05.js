// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

var map = function(arr, fn) {
    const returnedArray = [];
    for(let i=0;i<arr.length;i++){
        returnedArray[i]=fn(arr[i],i);
    }
    return returnedArray
};
// Example 1:
// const arr = [1, 2, 3];
// const fn = n=>n+1;
// console.log(map(arr, fn)); // [2,3,4]
// Example 2:
arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
console.log(map(arr, fn)); // [1,3,5]
