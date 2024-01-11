/*
-> Js ka default behaviour h prototypal behaviour. Read: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
-> Prototype behaviour of Js is nothing but JS just find a thing. Haar nhi maanti. Agar usko kuch nhi mil rha h to wo uski ek or upar wali
layer par jaati h, parents ko access krti h  and or upar and so on. Ise prototypal chaining kehte h

-> arrow fn k andar this ka access nhi hota
-> array ka parent object h and string ka bhi parent object h and object ka parent NUll h. Hum ye keh skte h ki JS m 
har cheej ek object h and jo properties object k pass h wo string k and array k paas bhi h. Usable ho ya n ho

-> a function is also an object in Js

*/

function multiply(num){
    return num*5;
}

console.log(multiply(5));
multiply.power=2;//ab ye property object ki hoti h . hum fn m bhi acces kr rhe h . I.e fn is also an object
console.log(multiply.power);

console.log(multiply.prototype);//iska prorotype object aata h

//To isse hmne samjha ki JS har cheej object h (i.e har cheej ka end m object hi parent h). Function, ek function bhi hota h and ek object bhi hota h
//fn , fn ki tarah behave krta hi h but hum usse object jesa bhi behave kra skte h because at end, everything is an object in JS

function createUser(username,score) {
    this.username=username
    this.score=score
}

//injecting some fn in prototype of anything
createUser.prototype.increment=function(){//ye increment functionality hmne add kri h is fn k prototype m
    this.score++;
}

createUser.prototype.printMe=function()
{
    console.log(`Username : ${this.username}, score: ${this.score}`);
}

const chai=new createUser("chai",10)//agar hum new keyword use nhi krenge to ye additional property jo prototype m add kri h ye acces nhi krr peyngi
const tea=new createUser("tea",20)

//ab hme .prototype likhne ki jrurat nhi hoti to access methods. Wo JS khud handle krr leta h

chai.printMe()
chai.increment()
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor 
function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound
 to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes 
 this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive 
value (object, array, function, etc.), the newly created object is returned.

*/