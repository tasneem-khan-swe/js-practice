console.log("Prototype Inheritance Demo");
console.log("Object Prototype Inheritance");
const obj1={
    name:"Seher",
    greet:function(){
        console.log("Hello "+ this.name)
    }
}
const obj2={
    // name: "Khan",
    age: 25,
    salary: 15_00_000,
    getSalary:function(){
        return this.salary;
    },
    __proto__: obj1,
}

// console.log(obj1.greet())
console.log("salary",obj2.getSalary())

console.log("Array Prototype Inheritance");

const arr1=[1,2,3];
console.log("original array",arr1);

Array.prototype.show=function(){
    return this;
}
console.log("Array after show method",arr1.show());

console.log("Function Prototype Inheritance");
function MyPrototype(name, age){
    this.name=name;
    this.age=age;
    // this.salary=salary;
}
// MyPrototype.prototype=obj2;

const myProto=new MyPrototype("Ayat", 25);
MyPrototype.prototype=obj2;
const myProto2=new MyPrototype("Ali", 30);
console.log("function", myProto2.getSalary());
