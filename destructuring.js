const obj={
    id:1,
    userName:"John",
    city:"Navi Mumbai",
}
// get userName using destructuring
const {userName}=obj;
console.log(userName); // John

// get property not in object ->using default value
const {age = 30}=obj;
console.log(age); // 30

// rename property 
const {city:location}=obj;
console.log(location); // Navi Mumbai

const name="Alice";
console.log(name); // Alice