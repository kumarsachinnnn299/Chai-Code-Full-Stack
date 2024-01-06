//for each loop
//ye ek high order fn h/. Array k prototype m defined hota h


/*
    syntax: array.forEach(callback_function(){})
    
    Ye braces k andar wale ko callback fn bolte h to uska naam nhi dete. isiliye ye pehli approach m 'function'
    keyword likhne k baad function ka naam nhi likha
    
    callback fn: A callback function is a function passed into another function as an argument, 
    which is then invoked inside the outer function to complete some kind of routine or action.
    
    more study callback fn: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
*/


const coding=["JS","Ruby","JAVA","C++"]

coding.forEach(function(val){
    console.log(val);
    
});
console.log(' ');


//or through arrow fn. 
coding.forEach((val)=>{
    console.log(val);
});
console.log(' ');

//or by defining fn explicitly

function print(element)
{
    console.log(element)
}

coding.forEach(print)
console.log(' ');

//other parameter that for each loop have
coding.forEach((item,index,arr)=>{
    console.log(`Value is: ${item}, index is ${index} and array is ${arr}`);
    console.log(item,index,arr);
    
});
console.log(' ');


//Applying foreach loop on array of object
const myLanguages=[
    {
        language:"javascript",
        languageFile:"js"
    },
    {
        language:"c++",
        languageFile:"cpp"
    },
    {
        language:"Python",
        languageFile:"py"
    },
]

myLanguages.forEach((obj)=>{
    console.log(obj.language," : ", obj.languageFile);
})
