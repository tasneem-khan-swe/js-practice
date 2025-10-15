const expect=val=>{
    return {
        toBe:exp=>{
            if(exp===val) return true
            throw new Error ("Not Equal")
        },
        notToBe:exp=>{
            if(exp!==val) return true
            throw new Error ("Equal")
        }
    }
}
console.log(expect(5).toBe(5)) // true
console.log(expect(5).notToBe(5)) // false