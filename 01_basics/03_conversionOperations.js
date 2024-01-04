/* 
    A) Conversion to number
        1) NaN ka type Number hota h 
        2) Number string to number easy h i.e: "33"=> 33
        3) String to number gives NaN whose type is also number i.e: "Sachin"=> to number gives: NaN
                                                                        "33abc"=> to Nu,ber goves: NaN
        4) true=> to number :1 and false=> 0                                                                

*/
let score1="33"
let score2="33abc"
let score3=null
let score4=undefined
let score5=true

console.log(score1);
console.log(typeof score1)//typeof m bracket lgao ya nhi same hi h
let Number1=Number(score1)
console.log(Number1)
console.log(typeof Number1,'\n')

console.log(score2)
console.log(typeof (score2))
let Number2=Number(score2)
console.log(Number2)//Nan is another type of value jo exact number nhi htoi: Not A Number(NaN)
console.log(typeof Number2,'\n')

console.log(score3);
console.log(typeof score3)
let Number3=Number(score3)//null ko number m convert krne pe 0 bn jaata h
console.log(Number3);
console.log(typeof Number3,'\n')

console.log(score4);
console.log(typeof score4)
let Number4=Number(score4)
console.log(Number4);
console.log(typeof Number4,'\n');

console.log(score5);
console.log(typeof score5)
let Number5=Number(score5)
console.log(Number5);
console.log(typeof Number5,'\n')


 
/*
    B) Conversion to Boolean
        1) 1=> true, 0=> false
        2) empty string  example: ""=> false & non empty string example: "sachin"=> true
*/

let v1=1
let booleanv1=Boolean(v1)
console.log(v1)
console.log(typeof v1);
console.log(booleanv1);
console.log(typeof booleanv1,'\n')

let v2=""
let booleanv2=Boolean(v2)
console.log(v2)
console.log(typeof v2);
console.log(booleanv2);
console.log(typeof booleanv2,'\n')

/*
C) Conversion to String 

*/
let no1=33
let no1ToString=String(no1)
console.log(no1)
console.log(typeof no1);
console.log(no1ToString);
console.log(typeof no1ToString,'\n')


//***************************************** Operations *********************************
let value=3
let negValue=-value
console.log(negValue,'\n');

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**3);//Power k liye ye h JS m
// console.log(2%2);

let str1="Hello"
let str2=" Sachin"
let str3=str1+str2
console.log(str3,'\n');

//Tricky things
//Refer here: https://www.youtube.com/watch?v=OeVE-8CIzys
//Study link: https://tc39.es/ecma262/multipage/abstract-operations.html

/*Isme bas itna samjh lo ki agar string pehle h to sab string m ho jayega convert 
and agar last m h string to start m jo h usme ho jayega convert*/
console.log(1+"2")
console.log(typeof (1+"2"));
console.log("1"+2)
console.log(typeof ("1"+2));
console.log("1"+2+2)
console.log(typeof ("1"+2+2));
console.log(1+2+"2")
console.log(typeof (1+2+"2"));

console.log(true);
console.log(+true);//iska one isliye aaya kyuki + ki wajah se true boolean se number m convert ho gya
// console.log(true+);  ye error dega
console.log(+"");

//Some points about assignment operator

let n1,n2,n3;
n1=n2=n3=2+2//not a good practice
console.log(n1,n2,n3)
