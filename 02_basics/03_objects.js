//singleton object: object created from constructor: in this ways-> "Object.create"
//not singleton: when object created from literals: "const jsUser={}" ye curly braces hi h object


//object literals
//Creating object
const mySym=Symbol("key1")
const jsUser={
name:"Sachin",//by default system keys ko strings ki tarah process krta h . user bhale use kese bhi likhe
"fullname":"Sachin Kumar Singh",
// mySym:"myKey1" -> not correct way to use symbol in Object. It will act as a (key: string) pair
[mySym]:"myKey1",//how we use a symbol in a object
age:20,
location:"Jaipur",
email:"sachin@gmail.com",
isloggedIn:false,
lastLoginDays:["Monday","Wednesday"]
}

//Accessing object property
console.log(jsUser.email);
console.log(jsUser["email"]);//email ko "" isiliye dala because keys are processed as strings
// inmse same aayega result
console.log(jsUser["fullname"]);//yha dot method kaam nhi krega
console.log(jsUser[mySym]);
console.log(typeof (jsUser[mySym]));

//Changing value of object
jsUser.email="usersachin@gmail.com"
// Object.freeze(jsUser)//to lock object and prevent any change in its values
jsUser.email="usersachin@google.com"
console.log(jsUser);

jsUser.greeting=function()
{
    console.log("Hello JS User");
}
jsUser.greeting2=function()
{
    console.log(`Hello JS User, ${this.fullname}`);
}

//Both will give diff op
console.log(jsUser.greeting);//Fn execute nhi hoga uska bas reference aayega
console.log(jsUser.greeting(),'\n');//Isme fn execute hoga

console.log(jsUser.greeting2);
console.log(jsUser.greeting2());


//Imp note: Object ki value dot operator and square brackets dono se krni cahiye. Dono ka khi n khi use h
