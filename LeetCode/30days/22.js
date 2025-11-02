/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 1
var flat = function (arr, n) {
    let result=[]
    if(n === 0){
        return arr
    }else{
        for(const el of arr){
            if(Array.isArray(el)){
                result.push(...flat(el, n-1));
            }else{
                result.push(el);
            }
        }
    }
    return result;
};
console.log(flat(arr1,n))