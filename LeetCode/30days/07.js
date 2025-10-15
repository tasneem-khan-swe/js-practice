const reduce=(arr, fn, init) => {
    let val=init;
    for(let i=0;i<arr.length;i++){
        val=fn(val,arr[i])
    }
    return val
}
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
console.log(reduce(nums, fn, init)); // 10