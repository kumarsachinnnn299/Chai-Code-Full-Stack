//This object similar to class as it have methods and properties
const user={
    username:"sachin",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        // console.log('Got user details');
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

//"this" keyword used to refer to the current context

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);//ye yaha empty dega in node environment but browser m window object dega

//Constructor function ye bas whi h jo "new" keyword h

function User(username,loginCount,  isLoggedIn)
{
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greetings=function()
    {
        console.log(`Welcome!! ${this.username}`);
    }

    return this;//ise likhe ya n likhe ye implicitly return hota hi h
}

const user1=User("Sachin",12,true)
console.log(`User1 before creating user2 `);
console.log(user1);
//but agar is tarah se krne lge to code override ho jayega. See user2 overrides value of user1
// const user2=User("Yanshi",18,false)
// console.log('User1 after creating user2 ');
// console.log(user1);

//Thats why we use constructor fn i.e "new" as it gives new instance or copy of an object
const user3=new User("Shikhar",33,true)
console.log(user1);
console.log(user3);
console.log(user1.constructor);//so constructor property is nothing but a reference to itself

//another operator : instanceOf: to check whether an instances is of some particular class or not 

/*
Steps of constructor fn: new keyword behind the scene krta kya h
1) firstly an empty object is created. it is called instance
2) Constructor fn is called due to new keyword and it packs all the arguements given to it
3) all these packed arguements are injected in this keword or the empty object
4) we get these packed arguments in the constructor fn
*/