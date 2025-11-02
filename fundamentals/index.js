// // const a="abc";
// // const b=123;
// // const c=true;
// // const d=null;
// // let e;
// // const f={name:"John", age:30};
// // const g=[1,2,3,4,5];
// // const h=()=>console.log("Hello");
// // console.log(typeof a); // string
// // console.log(typeof b); // number
// // console.log(typeof c); // boolean
// // console.log(typeof d); // object
// // console.log(typeof e); // undefined
// // console.log(typeof f); // object
// // console.log(typeof g); // object
// // console.log(g instanceof Array); // true
// // console.log(a instanceof String); // false

// // console.log(true + '1');  
// // console.log(false == 0);  
// // console.log('10' - '5' + 2);

// // console.log("== vs === comparisons:");
// // console.log(null == undefined);
// // console.log(null === undefined);
// // console.log('0' == false);
// // console.log('0' === false);

// // console.log("Truthy and Falsy values:");
// // console.log(Boolean(''));  
// // console.log(Boolean([]));  
// // console.log(Boolean({}));  
// // console.log(Boolean(NaN));

// // // function to check truthy/falsy
// // const checkTruthiness = (value) => {
// //     if (value) {
// //         console.log(`${value} is Truthy`);
// //     } else {
// //         console.log(`${value} is Falsy`);
// //     }
// // }

// // // var, let, const usage
// // // var example
// // var x = 10;
// // var x = 20; // redeclaration & reassignation allowed
// // console.log(a); // 20

// // // let example
// // let y = 10;
// // // let y = 20; // SyntaxError: Identifier 'y' has already been declared
// // y = 30;       // Reassigning is allowed
// // console.log(y); // 30

// // // const example
// // const z = 100;
// // // z = 200; // TypeError: Assignment to constant variable
// // console.log(z); // 100

// // // --- IGNORE ---
// // console.log(JSON.stringify({a: 1, b: undefined, c: null})); // {"a":1,"c":null}

// // // ============================
// // // JavaScript Scope Demo File
// // // ============================

// // console.log("JavaScript Scope Demo");
// // // 1. const vs let usage
// // const API_URL = "https://api.example.com"; // constant reference
// // let retryCount = 0; // can be reassigned
// // retryCount++;
// // console.log("1️⃣ retryCount:", retryCount);

// // // 2. var redeclaration inside block scope
// // var nameVar = "Alice";
// // if (true) {
// //   var nameVar = "Bob"; // same variable (function scoped)
// // }
// // console.log("2️⃣ nameVar:", nameVar); // Bob

// // // 3. Redeclaring let and const (uncomment to see errors)
// // let age = 25;
// // // let age = 30; // ❌ SyntaxError
// // const city = "Berlin";
// // // const city = "Paris"; // ❌ SyntaxError
// // console.log("3️⃣ age:", age, "city:", city);

// // // 4. const array mutation
// // const numbers = [1, 2];
// // numbers.push(3); // allowed
// // console.log("4️⃣ numbers after push:", numbers);
// // // numbers = [4, 5]; // ❌ TypeError: Assignment to constant variable

// // // 5. Block scope vs function scope
// // function demoScope() {
// //   if (true) {
// //     let m = 1;
// //     var b = 2;
// //   }
// //   console.log("5️⃣ b (var):", b); // ✅ works
// // //   console.log(m); // ❌ ReferenceError: not defined
// // }
// // demoScope();

// // // 6. var is not block scoped
// // if (true) {
// //   var greeting = "Hello!";
// // }
// // console.log("6️⃣ greeting:", greeting); // accessible outside block

// // // 7. Block scope prevents bug example
// // console.log("7️⃣ for loop with var:");
// // for (var i = 1; i <= 3; i++) {
// //   setTimeout(() => console.log("var i:", i), 1000);
// // }

// // console.log("7️⃣ for loop with let:");
// // for (let j = 1; j <= 3; j++) {
// //   setTimeout(() => console.log("let j:", j), 1000);
// // }

// // // 8. var, let, const inside if block
// // function testScope() {
// //   if (true) {
// //     var a = "var variable";
// //     let b = "let variable";
// //     const c = "const variable";
// //   }
// //   console.log("8️⃣ a (var):", a); // ✅
// //   // console.log(b); // ❌ ReferenceError
// //   // console.log(c); // ❌ ReferenceError
// // }
// // testScope();

// // // 9. Global variable shadowing
// // let language = "JavaScript";
// // function showLanguage() {
// //   let language = "TypeScript"; // shadows global variable
// //   console.log("9️⃣ Inside function:", language);
// // }
// // showLanguage();
// // console.log("9️⃣ Outside function:", language);

// // // End of scope demo
// // const a=2;
// // const x=()=>a*3;
// // console.log(x());

// const memoize=(fn)=>{
//   const cache={};
//   return (...args)=>{
//     console.log(cache);
    
//     const key=JSON.stringify(args);
//     if(cache[key]) return cache[key];
//     const result=fn(...args);
//     cache[key]=result;
//     return result
//   }
// }
// const add=(a,b)=>a+b
// const memoizedAdd=memoize(add);
// console.log(memoizedAdd(2,3));
// console.log(memoizedAdd(3,2));
// console.log(memoizedAdd(3,2));

// var isEmpty = function(obj) {
//     for(const key in obj){
//       return false;
//     }
//     return true;
// };
// console.log(isEmpty([12]));

// var chunk = function(arr, size) {
//      const result=[];//[]
//     for(let i=0;i<arr.length;i+=size){
//         const subArr=arr.slice(i,i+size) 
//         result.push(subArr)
//     }
//     return result
// };
// console.log(chunk([1,2,3,4,5,6,7],3));

// Array.prototype.last = function() {
//   console.log(this);
//     // return this.reverse()[0]??-1;
//     return this[this.length-1]
// };
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.last())
var sortBy = function(arr, fn) {
  cosnole
    return arr.sort((a,b)=>fn(a)-fn(b))
};
arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
console.log(sortBy(arr, fn));