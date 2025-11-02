// Write your own example combining setTimeout and Promise to demonstrate the event loop.

// What happens if you place setTimeout(fn, 0) inside a long-running loop?

// Create a timer that logs "Cooking..." every 2 seconds and stops after 10 seconds.
const cookingTimer=()=>{
    let elpased=0;
    const intervalId=setInterval(()=>{
        console.log("Cooking...");
        elpased+=2000;
        if(elpased>=10_000){
        clearInterval(intervalId)
        }
    },2000);
}
// cookingTimer();

// // Write a function that prints numbers 1–5 with a 1-second gap using setTimeout.
// for(var i=1;i<=5;i++){
//     ((x)=>setTimeout(()=>{
//         console.log(x)
//     },x*1000))(i)
// }
// Show how to stop an interval using clearInterval.
// ...

// 💎 Promises
// Create a Promise that resolves after 3 seconds with "Data loaded".
const getData=new Promise((res, rej)=>{
    setTimeout(()=>{
        res("Data loaded");
    },1000)
})
// getData.then(console.log)
// Chain .then() calls to transform the data (e.g., make it uppercase or append something).
// getData.then(res=>console.log(res.toUpperCase()))


// Handle an error with .catch() and log "Try again".

getData.then(res=>console.log(res)).catch(console.log)