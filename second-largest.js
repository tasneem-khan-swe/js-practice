// Find the 2nd Largest Number in an Array
// const secondLargest=arr=>{
//     return [...new Set(arr.sort((a,b)=>b-a))][1]??null
// }
const secondLargest=arr=>{
    let lg=-Infinity, sl=-Infinity;
    for(const num of arr){
        if(num>lg){
            sl=lg;
            lg=num
        // }else if(num<lg && num>sl){
        //     sl=num
        }
    }
    return sl===-Infinity ? null : sl;
}
console.log(secondLargest([]));
console.log(secondLargest([-2,-1,4,-7,-3]));
console.log(secondLargest([3,1,4,5,0])); //4
console.log(secondLargest([4,4,4,4]));
console.log(secondLargest([20,10,10,20,8,6])); //10