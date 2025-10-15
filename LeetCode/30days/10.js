var once = function (fn) {
    let called = false;
    let result;
    return function (...args) {
    console.time("fn");
        if (!called) {
            result = fn(...args);
            called = true;
            console.timeEnd("fn");
            return result;
        }
    console.timeEnd("fn");
        return undefined;
    }
}
const callOnce=once((a,b)=>a+b);
console.log(callOnce(1,2));
console.log(callOnce(4,2));