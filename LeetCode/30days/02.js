const createCounter=(n)=>{
    return ()=>{
        console.log(n++)
        // return n++
    }
}
const counter=createCounter(10);
counter()
counter()
counter()