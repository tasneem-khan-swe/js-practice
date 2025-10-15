const missingNumber = (arr) => {
    const n=arr.length+1;
    const total=n*(n+1)/2;
    const sum=arr.reduce((acc, curr)=>acc+curr,0);
    return total-sum;
}
console.log(missingNumber([1,4,3,5]))