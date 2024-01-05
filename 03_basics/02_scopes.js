let a=10//Block scope
const b=20//Block scope
var c=30//Global scope and agar kuch n bhi likhe to bhi global scope hota h : c=30=> this is global scope

//Scope is basically curly braces {}

//Note : Node environment ka global scope is different from JS environment ka global scope in browser

function addOne(num)
{
    return num+1
}

const addTwo=function(num)
{
    return num+2
}

//both are correct way to define fn. Second one is fn defined as expression and second way m define krne k bad hi fn use krr skte h
//but first way m pehle use krr skte h and define baad m krr skte h i.e line 23 wale code ko line 14 se pehle use nhi krr skte
//Isi cheej ko hoisting kehte h: ki hum kisi fn ko execute nhi krr skte uske expression bnaya h to uske baad hi use krr skte h

console.log(addOne(5));
console.log(addTwo(5));