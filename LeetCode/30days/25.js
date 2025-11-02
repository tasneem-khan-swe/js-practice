var promiseAll = function (functions) {
    return new Promise((resolve, reject) => { //#1
        const result = new Array(functions.length); //#2        
        let completed = 0;//#3

        if (functions.length === 0) {
            resolve([]);//#9
        }
        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then(res => {
                    result[i] = res; //#4
                    completed++;//#5

                    if (completed === functions.length) {//#6
                        resolve(result);//#7
                    }
                    console.log("RES",result, "completed", completed);
                })
                .catch(err => {
                    console.log("Error=>",err);
                    reject(err);//#8
                })
        }
    })
};
functions = [() => new Promise(resolve => setTimeout(() => resolve(4), 50)), () => new Promise(resolve => setTimeout(() => resolve(10), 150)), () => new Promise(resolve => setTimeout(() => resolve(16), 100))]
const promise = promiseAll(functions)
 promise.then(res=>console.log("res",res)).catch(console.log); // [42]