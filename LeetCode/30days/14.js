var cancellable = function(fn, args, t) {
    const timer=setTimeout(()=>{
        fn(...args)
    },t);
    const cancelFn=clearTimeout(timer);
    return cancelFn
};

const cancelFn = cancellable(console.log, ["will run if not cancelled"], 1000);
// cancelFn will be called automatically after some cancelTimeMs:
const cancelTimeMs = 5000; // less than 1000ms, so fn won't run
setTimeout(cancelFn, cancelTimeMs)