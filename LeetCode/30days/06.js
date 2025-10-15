var filter = function(arr, fn) {
    const filteredArr=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
};
arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
console.log(filter(arr, fn)); // [20,30]