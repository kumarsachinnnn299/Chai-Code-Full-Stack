//Interview question: js m Pi ki value 3.14.... hoti h. Hume use 4 bnana h. Ho skta h ya nhi . if yes then how and if no then why?

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);
// //Change nhi hogi 

const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(`Description of PI is `);
console.log(descriptor,'\n');

//Isme descriptor ki value check krne k baad pta chlta h ki ye writabl propertye m false h is property ka and ye property bahut core level pe 
//hum Pi ki value change nhi krr kste

//Hum is tarah se hmare objects pe bhi properties and flags lga skte h 

//Creating object 
// way1
// const mynewObject=Object.create(null)

//way 2

const chai={
    name:"ginger chai",
    price:250,
    isavailable:true,
    orderChai:function(){
        console.log('Chai nhi bani');
    }
}
console.log(`Object created is: `);
console.log(chai,'\n');
//Checking the property of this object
console.log(Object.getOwnPropertyDescriptor(chai,"name"));//this will show the property 

console.log('Iteration of object before making name property of chai non-enumerable ');
for (let [key,value] of Object.entries(chai)) {// bye default chai is object and objects are not iterable by default. we have to use Object.entries
    
    if(typeof value!=='function')console.log(`${key} ${value}`);
}

//Now to change the property : name wali property ko iterate hone se rokna h
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

console.log('Iteration of object after making name property of chai non-enumerable ');
for (let [key,value] of Object.entries(chai)) {
        
    if(typeof value!=='function')console.log(`${key} ${value}`);
}



