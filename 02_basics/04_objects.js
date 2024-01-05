//Singleton objects

const tinderUser=new Object()
tinderUser.id="123abc"
tinderUser.name="Sachin"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

//Nested Object 
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Sachin",
            lastName:"Singh"
        }
    }
}
console.log(regularUser.fullname.userfullname);

//combining objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3={obj1,obj2}//not good way: as it will have object inside object
console.log(obj3);

const obj4=Object.assign(obj1,obj2)//aese krenge to saari value obj1 m jayengi
console.log(obj4);
const obj5=Object.assign({},obj1,obj2)//ye prefered h. Aese krenge to saari value empty objevct m jayengi. Athough same result
console.log(obj5);

//Mostly used to combine is spread operator
const obj6={...obj1,...obj2}
console.log(obj6);

//To get all keys
console.log(Object.keys(tinderUser));//will give array of keys
console.log(Object.values(tinderUser));//will give array of values
console.log(Object.entries(tinderUser));//will give array of each key value pair as array of array

//To check if any value exist
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//Destructuring an object

const course={
    coursename:"JS in HIndi",
    price:999,
    teacher:"Hitesh Chaudhary"
}

//to extract values
//1st way: course.teacher

//2nd way

const {teacher}=course
console.log(teacher);
//ise hum apna naam bhi de skte h

const {teacher: masterji}=course
console.log(masterji);

/*

    Format of Json: It is JS object it self
    {}-> this is json
    
    {

        "name":"Sachin",
        "Age":22
    }

    in JSOn: keys are strings
    values can be string, or other

*/