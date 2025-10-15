function memoize(fn) {
    let callCount = 0;
    const cache = new Map();
    return function (...args) {
    console.time("fn");
        const key = JSON.stringify(args); // [2,3] or [3,2] both same key "2,3"`
        if (cache.has(key)) {
            console.log("from cache", callCount);
            console.timeEnd("fn");
            return cache.get(key);
        } else {
            let result = fn(...args);
            cache.set(key, result);
            callCount++;
            console.log("from fn", callCount);
            return result;
        }
    }
}
const sum = (a, b) => a + b
const memoizedFn = memoize(sum);
console.log(memoizedFn(2, 3)) //5 from fn
console.log(memoizedFn(3, 2)) //5 from fn
console.log(memoizedFn(2, 3)) //5 from cache