const score=400

const balance= new Number(100)
console.log(score);
console.log(balance);
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))//to round upto 2 decimal places

const otherNumber=23.8966
const otherNumber2=123.8966
const otherNumber3=1233.8966
console.log(otherNumber.toPrecision(3));//Important 3 kya krega ki shuru se start ki 3 digit tak round off krr dega
console.log(otherNumber2.toPrecision(3));
console.log(otherNumber3.toPrecision(3));

const hundreds=10000000
console.log(hundreds.toLocaleString());//to convert a number into a sustem: by default US k hisab se comma lgte h
console.log(hundreds.toLocaleString('en-IN'),'\n');//Indian system k liye




//********************************* Maths ************************************ */
console.log(Math.abs(-5));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4,3,1,3,6));
console.log(Math.max(4,3,1,3,6));
console.log(Math.random());//it gives value between 0 and 1
console.log(Math.random()*10);//ye dega but ye zero bhi de skta h when we get 0.034834 or similar values so we do +1
console.log(Math.floor(Math.random()*10)+1);

//Trick to get values between a range
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);
