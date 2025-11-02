const once=fn=>{
    let called=false;
    let result;
    return (...rest)=>{
        if(!called){
            called=true;
            result= fn.call(this,...rest)
        }
        return result
    }
}
// const greet=(name)=>console.log("Hiiiiii", name)
// const greetOnce=once(greet)
// greetOnce("Seher")
// greetOnce("sundari")
// greetOnce()
// greetOnce()

const sum=(a,b)=>a+b;
const sumOnce=once(sum);
console.log(sumOnce(1,2))
sumOnce(1,2)
sumOnce(1,2)