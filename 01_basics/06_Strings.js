//Both '' and "" are same
const name="Sachin"
const age=20
// console.log(name+age+" hello");
// console.log(name, age, " hello"); Ye tareeke ajkal use nhi kiye jaate 
console.log(`Hello my name is ${name} and my age is ${age}`);//more better syntax and more used known as String Interpolation

//Another way of declaring String
const gameName= new String("Spiderman")
//ye dono same hi h but ye ek object ki tarah bnega(like key value pair ) and isme bahut saare methods available honge
console.log(gameName[0]);
console.log(gameName.__proto__);//Ye protoype object use krne k liye hota h . Iski help se hum bahut saare methods
//ka use krr paate h.
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

//Substring method
const newString =gameName.substring(0,4)//last index is not included
//Substing m -ve value di to wo 0 lelga uski jagah as -ve values are not allowed in this
console.log(newString);

//Slice Method
const anotherString =gameName.slice(-8,4)
/*to uderstand this negative slicing
          S  p  i  d  e  r  m  a  n
 +idx     0  1  2  3  4  5  6  7  8 
 -idx    -9 -8 -7 -6 -5 -4 -3 -2 -1
*/
console.log(anotherString);

//Trim method
const tempString="    stringwithspace   "
console.log(tempString);
console.log(tempString.trim());
//we also have trimStart() and trimEnd() methods but trim() methods use both of them  at once

//Replace method
//const url="https://hitesh.com/hitesh chaudhary"//browser whitespace nhi samjhta h to whitespace ko url encoding m convert krr dega
const url="https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'))

//Includes method
console.log(url.includes('hitesh'));

//Split methods
console.log(url.split('/'));