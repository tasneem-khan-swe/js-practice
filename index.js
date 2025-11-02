// console.log("deep clone object");
// const deepClone=obj=>{
//   if(obj === null || typeof obj !== "object"){ // base case i.e primitive value
//     return obj
//   }
//   const result=Array.isArray(obj) ? [] : {}
//   for(const key in obj){
//     // if(obj.hasOwnProperty(key)){
//     result[key]=deepClone(obj[key])
//     // }
//   }
//   return result;
// }
// const obj1={id: 1, name: "name1", details: {age: 25, city: "NM"}}
// const obj2=deepClone(obj1);
// obj2.name="name2"
// obj2.details.age=26
// console.log(obj1)
// console.log(obj2)

// const flattenArray = arr => {
//   const result = []
//   for (const el of arr) {
//     if (Array.isArray(el)) {
//       // result.concat(flattenArray(el)) // won't work
//       // result = result.concat(flattenArray(el)) // work=>concat creates a new array
//       result.push(...flattenArray(el))
//     } else {
//       result.push(el)
//     }
//   }
//   return result;
// }
// const arr1 = [1, [2, 3, [4, 5]], 6]
// console.log(flattenArray(arr1));

// const debounce=(fn, t)=>{
//   let timer;
//   return (...args)=>{
//     if(timer) clearTimeout(timer);
//     timer = setTimeout(()=>{
//       fn(...args)
//     },t)
//   }
// }
// const getData=e=>{
//   console.log("Fetching data for ", e.target.value);
// }
// const debounceSearch=debounce(getData, 1000)

// const throttle=(fn, t)=>{
//   let shouldCall=true;
//   return ()=>{
//     if(!shouldCall) return;
//       shouldCall=false;
//     setTimeout(()=>{
//       fn()
//       shouldCall=true;
//     }, t)
//   }
// }
// let count=0;
// // const greet=()=>{
// //   console.log(++count,"Good Night!")
// // }

// const windowResize=()=>{
//   console.log("w=", window.innerWidth, "h=",window.innerHeight)
// }
// const throttleClick=throttle( windowResize, 1000)

// window.addEventListener("resize", throttleClick)

// const add=(a,b)=>{
//     for(let i=0; i<=10000000; i++){}
//     return a+b
// }

// const memoize=fn=>{
//   const cache={};
//   return (...args)=>{
//     const key=JSON.stringify(args);
//     if(key in cache){
//       return cache[key]
//     }
//     const result=fn(...args);
//     cache[key]=result;
//     console.log(cache);
    
//     return result;
//   }
//   console.log(cache);
// }
// add(2,3)
// memoizeAdd=memoize(add);
// console.time("add") 
// console.log(memoizeAdd(2, 3));
// console.timeEnd("add")
// // console.log(memoizeAdd(5, 3));
// // console.log(memoizeAdd(7, 5));
// console.time("add2") 
// console.log(memoizeAdd(2, 3));
// console.timeEnd("add2")

// => infinite currying...
// const add = (a) => {
//   return (b) => {
//     if (b) return add(a + b)
//     return a
//   }
// }
// console.log(add(1)(2)(3)(4)(5)(6)());

// <== Next day ==>
// console.log("event bubbling...")
// const btnContainer=document.getElementById("btnContainer")
// const btn=document.querySelector("#btn")
// // const div=document.querySelector("div")
// btnContainer.addEventListener("click",()=>{
//     console.log("outer div happened")
// },{capture: true}) //capturing enabled->outer first inner later
// btn.addEventListener("click",(e)=>{
//     e.stopImmediatePropagation() // capture value should not be true
//     console.log("btn clicked")
// },true)
