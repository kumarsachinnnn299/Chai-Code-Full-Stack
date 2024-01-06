//for of loop: these are array specific loops
//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

const greet="Hello World"
for (const i of greet) {
    console.log(i);
}

//Iterating Maps
const myMap=new Map()
myMap.set("IN","India")
myMap.set("US","America")
myMap.set("CN","China")

console.log(myMap);
for (const key of myMap) {
    console.log(`${key[0]}:${key[1]}`);
}

//or
for (const [key,value] of myMap) {
    console.log(`${key}:${value}`);
}


//Iterating an object
const myObj={
    "game1":"cricket",
    "game2":"football",
    "game3":"Badminton"
}
// for (const key of myObj) {//objects are not iterable in this way
//     console.log(obj);
// }
