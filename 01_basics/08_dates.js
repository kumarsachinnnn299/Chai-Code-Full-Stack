//Date
/*
JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of 
January 1, 1970, UTC (the epoch).
Note: TC39 is working on Temporal, a new Date/Time API. Read more about it on the Igalia blog. 
It is not yet ready for production use!

*/

//Date is an object
let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate,'\n');


//Methods of creating you date objects
let myCreatedDate=new Date(2023,0,23)//khud ki date create krne k liye and Mnoths start from 0
console.log(myCreatedDate.toDateString());
let myCreatedDate2=new Date(2023,0,23,5,3)
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3=new Date("2023-01-15")//yy--mm--dd
console.log(myCreatedDate3.toLocaleString());
let myCreatedDate4=new Date("01-14-2023")//mm--dd--yy
console.log(myCreatedDate4.toLocaleString(),'\n');

//Timetamp
let myTimeStamp=Date.now()
console.log((myTimeStamp));//Gives milliseconds from 01/01/1970 00:00 AM UTC
console.log(myCreatedDate.getTime())//this also gives time in milliseconds
console.log(Math.floor(Date.now()/1000),'\n')//this gives in second

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);//+1 taakin 0 based n mile

//This is how we can further customize the toLocaleString() method as per our requiremnets
// newDate.toLocaleString('default',{
//     weekday:"long",
    
// })

