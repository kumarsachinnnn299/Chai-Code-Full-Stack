/*
Categorisation of datatypes is mainly based on how these datatypes are stored in memory and how we access them
Datatypes are maily of two type: 1) Primitive or Value type i.e Call by value hote h  
                                 2) Non-Primitive or Reference Types i.e call by reference hote h

Primitives are of 7 categories:
  String, Number, Boolean, null, undefined, Symbol, BigInt
*/


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail//will get undefined as value

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNumber=132726363762462477436n//n lgane se ye bigInt bn jayega

/*
    Non - Primitive or Reference Types: Arrays, Objects, Functions
    Note: Javascript is dynamically typed language as we dont have to define the datatype of variable during declaration 
*/

const heros=["Shaktiman","Hero","Doga"]//Array
let myObj={
    name:"Sachin",
    age:23
}//Curly braces k andar object hota h

//JS m hum fn ko bhi variable ki tarah declare krr skte h
const myFunction=function(){
    console.log("Hello World");
}

// to find datatype of something
console.log(typeof outsideTemp,'\n');
//typeof kya dega 
/*
Undefined	"undefined"
Null	"object" (reason)
Boolean	"boolean"
Number	"number"
BigInt	"bigint"
String	"string"
Symbol	"symbol"
Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
Any other object	"object"
*/



//*********************************************************************************************
//Primitive dataype(Stack Memory) : Yha har variable ki copy bnti h , Non-Primitive datatypes(Heap Memory): yha har variable ka reference milta h

let myName="Sachin"
let anotherName=myName
console.log(myName);
console.log(anotherName);
anotherName="Rahul"
console.log(myName);
console.log(anotherName,'\n');


let user1={
    email:"user@gmail.com",
    age:66
}

let user2=user1
user2.email="sachin@gmail.com"

console.log(user1.email);
console.log(user2.email);