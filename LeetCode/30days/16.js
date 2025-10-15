// 2637. Promise Time Limit

const timeLimit=(fn, t)=>{
    return async (...args)=>{
        // return new Promise((resolve, reject)=>{
        //     fn(...args).then(resolve).catch(reject);
        //     setTimeout(()=>{
        //         reject("Time Limit Exceeded");
        //     }, t)
        // })
        return Promise.race([
            fn(...args), //already a promise
            new Promise((_,reject)=>{
                setTimeout(()=>{
                    reject("Time Limit Exceeded");
                }, t)
            })
        ])
    }
}
fn = async () => { 
  throw "Error";
}
inputs = []
t = 1000
const limited=timeLimit(fn, t);
limited(...inputs).then(console.log).catch(console.log);