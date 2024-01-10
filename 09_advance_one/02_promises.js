//The Promise is an object that represents the eventual completion (or failure) of an asynchronous operation 
//and its resulting value.

//Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

//create promises
const promise1=new Promise(function(resolve,reject){
    //Do an async task: DB calls, Crypto task, network task
    setTimeout(function(){
        console.log('Async task1 is complete');
        resolve()
    },1000)

  
})

//consuming the created promise
promise1.then(function()
{
    console.log('Promise1 consumed');
})

//another way of creating promise directly without saving into variable
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('async task 2 completed');
        resolve() 
    }, 1000);
}).then(()=>{
    console.log('Promise 2 consumed');
})

//.then basicaly usme wo jaata h jo succesfully agar ho jaye promise complete to jo run ho jana chahaiye
//then wo values bhi deta h jo basically aynegi us promise ko execute hone par. Agar DB se data mngaya h asynchonously
//to us data ko .then hme dega 

// .then() used to get values from the promise in case of succes of promise 
//and .catch() se errors in case of failure of promise
//.finally() always runs after some time either promise fulfilled or rejected

//passing data to .then()
const promise3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Completed async task 3');
        resolve({username:"the_sachinnn",email:"sachin@example.com"})//passing data to .then
    }, 1000);
   
})

promise3.then((data)=>{
    console.log(`Data received from promise 3 in resolve is: ${data.username}, ${data.email}`);
    console.log('promise 3 resolved');
})


//promise4 with chaining of .then() and catch anfd finally
const promise4=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=false;
        if(error)
        {
            console.log('Async task 4 completed with error');
            reject('ERROR : Something went wrong')
        }
        else{
            console.log('Async task 4 completed without error');
            resolve({username:"the_yanshi",email:"yanshi@example.com"})
        }
    }, 1000);
})

//we can also do chaining of multiple .then() and catch. And isi tarah likhe each .catch() and .then() ko next line pe
//for better code readibility
promise4
.then((data)=>{
    console.log('Promise 4 resolved');
    console.log(`Username is: ${data.username}, email : ${data.email}`);
    return data.username
})
.then((username)=>{
    console.log(`Username is: ${username}`);
})
.catch((error)=>{
    console.log('Promise 4 resolved with error');
    console.log(`Error is ${error}`);
})
.finally(()=>{
    console.log('Promise 4 finally block executed');
})


//promise5

const promise5=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(error)
        {
            console.log('Async task 5 completed with error');
            reject('ERROR : JS is best')
        }
        else{
            console.log('Async task 5 completed without error');
            resolve({language:"Javascript",framework:"Node.js"})
        }
    }, 1000);
})

//Note:  promise jruri nhi ki bas .then() , .catch() se hi handle ho. They can also be handle with async await 
//consuming promises with async await. It is same as .then and .catch.(i.e thodi der waith krta h kaam 
// k hone ka and jab ho jaata h tabhi aage bdhta h otherwise error dedeta h). It just dont handle catch gracefully. We have to use try and catch block 

async function consumePromise5()
{
    try {
        const respose=await promise5//isme response aayega with .then se ya .catch se
    console.log(respose);
    } catch (error) {
        console.log(`The error in promise 5 is: ${error}`);
    }
}

consumePromise5()

//ab ye sab itna jo pdha isme kaam aayega

//try catch format
/*
async function getAllUser()
{
    try {
        const response=await fetch('https://api.github.com/users/hiteshchoudhary')//this returns a promise
        const data=await response.json()//isko bhi time lgta h to ye bhi await hoga
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
*/

//.then(), .catch() format

async function getAllUser()
{
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((data)=>{
        return data.json()
    })
    .then((jsondata)=>{
        console.log(jsondata);
    })
    .catch((error)=>{
        console.log(error);
    })
} 
getAllUser()

//Note: point to remeber ki ye laast wale promse ka data itna time lene k baad bhi sabse pehle print hua and upar k code ka
//response baad m. Why: see next files or video

//Reson whi h ki jab hmne JS ka diagram pdha tha to usme jab hmne synchronous fn call k dekha tha ki wo stack se call hote h
//fir register call back se hoke task queue m fir se aate h. Fetch bhi same hi tareeke se kam krta h but ye register call bacl
//k baad ek special queue m aate h i.e priority queue. And wo call stack m sabse pehle aayega. And sabse pehle result ayega