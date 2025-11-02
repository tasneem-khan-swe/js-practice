const person={
    name:"Seher",
    age: 25,
    address:{
        city:"New York",
        country:"USA"
    },
    // greet:function(){
    //     console.log("Hello");
    // }   
}
// #shallow copy i.e top level only
// const otherPerson=Object.assign({}, person)
// const otherPerson={...person} // top level only

// # deep clone
// const otherPerson=JSON.parse(JSON.stringify(person)) // deep copy
// const otherPerson=structuredClone(person) // deep copy but no functions copy if in object gives error

const deepClone=(obj)=>{
    if( obj===null || typeof obj !== 'object'){
        return obj;
    }
    const result=Array.isArray(obj) ? [] : {};
    for (const key in obj){
        result[key]=deepClone(obj[key])
    }
    return result
}
const otherPerson=deepClone(person) // deep copy using custom function
// otherPerson.name="Jane"
// otherPerson.address.city="Los Angeles"  // shallow copy issue
console.log(person);
console.log(otherPerson);