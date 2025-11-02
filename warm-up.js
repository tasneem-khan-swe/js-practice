// conditional statements - if else case
// Q. Print grades based on marks.
// const mark = 70;
// if (mark >= 90) {
//     console.log("Excellent");
// }
// else if (mark >= 80) {
//     console.log("Very Good");
// }
// else if (mark >= 70) {
//     console.log("Good");
// }
// else if (mark >= 60) {
//     console.log("Average");
// }
// else if (mark >= 50) {
//     console.log("Below Average");
// }
// else if (mark >= 40) {
//     console.log("Poor");
// }
// else {
//     console.log("Invalid Mark");
// }   

// loops & conditional
// Q. FizzBuzz (print 1–100, multiples of 3 → "Fizz", multiples of 5 → "Buzz").
// for(let i=1; i<=100; i++){
//     if(i%3==0){
//         console.log("Fizz");
//     }else if(i%5==0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }

// Q. function to Check if a year is leap year.
// const isLeapYear=(year)=>{
//   if (year % 400 === 0) {
//     return true; // divisible by 400 → leap year
//   } else if (year % 100 === 0) {
//     return false; // divisible by 100 but not by 400 → not leap year
//   } else if (year % 4 === 0) {
//     return true; // divisible by 4 → leap year
//   } else {
//     return false; // all other cases → not leap year
//   }
// }
// const leapYear=(year)=>(year%400===0) || (year%100!==0 && year%4==0)

// const year = 2023;
// console.log(leapYear(year)?"Leap year": "Not a leap year");

// // Counter print 1 to 5 at every  second (SetInterval, clearInterval)
// let i=1;
// const id=setInterval(()=>{
//   console.log(i);
//   i++;
//   if(i>5) clearInterval(id)
// },1000)

// Second largest value from an array
// const arr=[3,3,3]
// const secondLargest=arr=>[...new Set(arr)].sort((a,b)=>b-a)[1]??null
// console.log(secondLargest([10, 5, 20,20, 8, 15])); // 15
// console.log(secondLargest([3, 3, 3]));  // null

// let l1=-Infinity;let l2=-Infinity;
// arr.forEach(el=>{
//     if(el>l1){
//         l2=l1;
//         l1=el;
//     // }else if(l1>el>l2){
//     }else if(el>l2 && el<l1){
//         l2=el;
//     }
// })
//     console.log(l2===-Infinity?null:l2);
// const arr1 = [
//  { id: 1, name: "Alice", age: 25 },
//  { id: 2, name: "Bob", age: 30 }
// ];


// const arr2 = [
// { id: 2, city: "London", country: "UK" },
//  { id: 1, city: "New York", country: "USA" },
// ];
// const arr2Map = Object.fromEntries(arr2.map(obj => [obj.id, obj]));

// const res = arr1.map(item1 => ({
//   ...item1,
//   ...arr2Map[item1.id]
// }));

// console.log("result", res);
// const mostFrequentChar = (str) => {
//     const map = new Map();
//     let maxLength = 0;
//     let maxChar = ""
//     for (const key of str.toLowerCase()) {
//         if (map.has(key)) {
//             map.set(key, map.get(key) + 1)
//         } else {
//             map.set(key, 1)
//         }
//     }
//     console.log(map)

//     for (let [key, value] of map) {
//         console.log("key", key);

//         if (value > maxLength) {
//             maxChar = key;
//             maxLength = value;
//         }
//     }
//     console.log("maxChar", maxChar, maxLength)
// }
// mostFrequentChar("India is great nation")
arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
], 
arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
var join = function(a1, a2) {
    // const map=new Map();
    // for(const obj1 of a1){
    //     map.set(obj1.id, obj1)
    // }
    // for(const obj2 of a2){
    //     map.set(obj2.id, {...map.get(obj2.id), ...obj2})
    // }
    // console.log(map);
    const map={};
    for(const obj1 of a1){
        map[obj1.id]= obj1
    }
    for(const obj2 of a2){
        map[obj2.id]= {...map[obj2.id], ...obj2}
    }
    console.log(Object.values(map));
    return Object.values(map)
};
console.log(join(arr1,arr2))
