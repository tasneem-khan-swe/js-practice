const removeDuplicates=(nums)=>{
    const unique=[...new Set(nums)]
    const k=unique.length;
    for(let i=0; i<nums.length;i++){
        nums[i]=unique[i]??"_"
    }
    return {k, nums}
}
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))