const arr= [3,4,11,7,-2] // [11,7,-2,2,4]
const n=2;
const rotateArray=(arr,n)=>arr.slice(n).concat(arr.slice(0,n));
console.log(rotateArray(arr,n));