// 2725. Interval Cancellation

const cancellable=(fn, args, t)=>{
    fn(...args);
    const intervalId=setInterval(()=>{
        const res = fn(...args);       // call once
        console.log(t, res); 
    }, t);
    const cancelFn=()=>clearInterval(intervalId);
    return cancelFn
}
const fn = (x) => x * 2;
const args = [4], t = 1000, cancelTimeMs = 9000;

const cancel=cancellable(fn, args, t);

setTimeout(cancel, cancelTimeMs); // after 190ms, fn will stop being called