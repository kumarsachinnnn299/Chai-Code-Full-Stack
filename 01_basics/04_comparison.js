// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1)//ye chl jayega but krna nhi chiaye as it sometimes do not gives predicted result
// jo hme lgega ki aana chahiye wo nhi aayega
console.log("02">1,'\n')

console.log(null>0)
console.log(null==0)
console.log(null>=0,'\n')
/* The reason is that an equality check == and comparisons >, <, >=,<= works differently.
 The comparison converts null to a number, treating it as zero. 
 thats why : 
    console.log(null>=0) gives true 
    console.log(null>0) gives false
 */

//Try to avaoid these types of complex comparisons

console.log(undefined>0);
console.log(undefined>=0);
console.log(undefined==0);
console.log(undefined<=0);
console.log(undefined<0,'\n');

//Strict check === check value as well as datatype
console.log("2"==2)
console.log("2"===2)
