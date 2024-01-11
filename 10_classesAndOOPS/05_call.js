/*
    -> Problem: Jab call stack m koi fn call hota h to uska context aata h. if fn k andar fn call hota h to us inner fn ka context outer fn k 
    baad stack m upar aajata h
    -> Now the context for this inner fn is not defined properly as for it, hme lgega ki the outer fn is its context.
    -> But aesa nhi h, ye inner fn ka this keyword jo h wo global execution context(EC) ko access krta h naake 
    outer fn k EC ko

    Problem of Global execution context 
    -> in browser: this deta h "window" object 
    -> in Node: this gievs {} empty object as global context


*/

function setUserName(username){
    this.username=username
    console.log('Function called');
}

function createUser(username,email,password)
{   
    setUserName(username)
    //ab ye fn fn k andar call ho rha h. Ab hme ye lgega ki ye andar wale fn ka this ka context wo hi hoga jo is outer wale fn ka h
    //but aesa nhi h. Ye set nhi krr payega
    //ye actually m fn call ho to rha h. but execution context khatam hone k baad uske dwara kiya gya sab kaam khatam ho jaa rha h
    //uske kaam ka reference nhi save ho rha h. for that we have to use .call method to save its reference

    setUserName.call(this,username)//ye this hmne pass krr diya h or ye fn is wale this m set krega values
    this.email=email;
    this.password=password

}

const chai=new createUser("chai","chai@tea.com","password")
console.log(chai);

console.log(this);