//Truthy ya Falsy: vo values jo maan li jaati h ki ye true hi hogi ya false hi hogi

const userEmail="sks@gmail.com"//ek bar next line wale ko check kro: undefined or empty string is also false
// let userEmail//will act as false
//let userEmail=""//will act as false

if(userEmail)
{
    console.log("got user email");
}
else{
    console.log("Can't get user email");
}

// falsy values

// false, 0, -0, BigInt 0n (ye h BigInt ka 0), "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


//checking array is empty or not as [] is considered a truthy value
    const arr=[]
// if (arr.length === 0) {
//     console.log("Array is empty");
// }

//Checking if object is empty or not
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null undefined: ye null and undefined ko handle krne k liye

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1=undefined??null//yha null lega
val1 = null ?? 10 ?? 20//jo value pehle milegi wo lelega
console.log(val1);



// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

/*
    Extra knowledge: 
        false==0//true
        false==''//true
        0==''//true

*/