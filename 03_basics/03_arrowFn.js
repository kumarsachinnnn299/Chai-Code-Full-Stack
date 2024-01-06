//Diff b/w arrow and normal fn: https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/

const user={
    username:"Hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to this website`);
        console.log(this)
    }

}

user.welcomeMessage()
user.username="Sachin"
user.welcomeMessage()

console.log(this);//ye ek empty object dega in node environment but browser m krenge to window object aayega. Because 
                //window is global object in browser

function chai()
{
    console.log(this);
}
chai()//Isme this kaafi values dega

function chai2()
{   let username="Sachin"
    console.log(this.username);//Ye aese bas object m hi krr skte h fn m nhi 
}
chai2()

//Declaring this fn as expression will also give same op

const chai3=function()
{
    let username="Sachin"
    console.log(this.username)
}

chai3()

//Another way of creating fn is replace fn keyword by => and we get arrow fn
const chai4=()=>{
    let username="Sachin"

    console.log(this)//ye yha empty object dega
    console.log(this.username)
}
chai4()

//Syntax of arrow fn
//Ye h explicit return as we have to use return keyword expilictly
const add=(num1 ,num2)=>{
return num1+num2
}

console.log(add(2,5));

//another way of arrow fn: Impliciy return
const mul=(num1,num2)=>num1*num2
//or  const mul=(num1,num2)=>(num1*num2)    Curly braces use kre to return keyword use krna pdega
console.log(mul(5,2));

//Return object in implicit return arrow fn: parenthesis k andar curly braces m object 
const objreturn=()=>({name:"Sachin",age:22})
console.log(objreturn());
