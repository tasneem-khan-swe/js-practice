// function throttle(func, del){
//     // let last=0;
//     // return function(...args){
//     //     const now=Date.now();
//     //     // console.log("date", now);
//     //     if(now-last>=del){
//     //         func(...args)
//     //         last=now;
//     //     }
//     // }
//     let shouldCall=true;
//     return function(...args){
//         if(!shouldCall) return;
//         shouldCall=false;
//         setTimeout(()=>{
//             func(...args)
//             shouldCall=true;
//         },del)
//     }
// }

// const resizeWindow=()=>{
//     const w=window.innerWidth;
//     const h=window.innerHeight;
//     console.log(`Width: ${w}, Height: ${h}`);
// }
// const btnClick=()=>{
//     console.log("Button clicked!");
// }
// window.addEventListener("click",throttle(btnClick,2000))
// window.addEventListener("resize",throttle(resizeWindow, 1000));

const showBtnName=()=>{
    const btn=document.getElementById("btn");
    console.log(btn.innerText+" clicked!");
}
const throttle=(fn,t)=>{
    // let shouldCall=true;
    // return ()=>{
    //     if(!shouldCall) return;
    //     shouldCall=false;
    //     setTimeout(()=>{
    //         fn();
    //         shouldCall=true;
    //     }, t)
    // };
    // let last=0;//calling first time
    // return ()=>{ //always come here on click
    //     const now=Date.now(); //current time in ms
    //     if(now-last>=t){ //if time difference is greater than t
    //         fn();
    //         last=now; //reassign last to now after calling fn
    //     }
    // };
}
const throttleClick=throttle(showBtnName, 1000);

// function throttle(fn, delay) {
//   let last = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - last >= delay) {
//       fn.apply(this, args);
//       last = now;
//     }
//   };
// }
// const throttle=(fn, delay)=>{
//   let last= 0 ;
//   return (...args)=>{
//     const now=Date.now();
//     if(now-last>delay){
//       fn.apply(this, args);
//       last=now;
//     }
//   }
// }
// // Usage
// window.addEventListener("scroll", throttle(() => {
//   console.log("Scroll event triggered");
// }, 1000));

// - Throttle: Allow function to run only once in a given interval. eg.:Window scroll event, resize handler, btn click
