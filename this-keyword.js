// "use strict"; 
console.log("outside",this); //{}(i.e. global in node) OR window(browser)

function func1(){
    console.log("inside funct",this); // undefined(strict mode) OR window/global
}
const func2=()=>{
    console.log("inside arrow funct",this); // undefined(strict mode) OR window/global
}
func1();
func2();

const obj={
    a:5,
    x:function(){
        console.log("inside object's func",this)
    },
    y:()=>{
        console.log("inside object's arrow func",this)
    }
}
obj.x()
obj.y()