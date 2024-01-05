function sayMyName()
{
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// sayMyName()
function addTwoNumbers(number1,number2)
{
    console.log(number1+number2);
}

addTwoNumbers(3,2)//It does not return a value

function addTwoNumbers2(number1,number2)
{
    return number1+number2
}

const result=addTwoNumbers2(3,9)
console.log(`Result of addition is ${result}`);

function loginUserMessage(username="Sam")//here we have given default value
{   if(username===undefined)
    {
        console.log("Please enter a user name")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());

//When no of argumenst are not known so we can't fix no of parameters of fn so we use rest operator or spread operator
// ... isi ko rest bhi bolte and spread operator bhi bolte. it depend on use case 
function calculateCartPrice(...num)//yha ye h rest operator
{
    return num
}
console.log(calculateCartPrice(23,34,56));
function calculateCartPrice2(num1,num2,...num)//yha ye h rest operator
{
    return num
}
console.log(calculateCartPrice2(23,34,56,55,67));//yha num1 and num2 me start ki value gyi baaki num m gyi

//Function having objects as arguments

const user={
    username:"Sachin",
    age:20
}

function handleObject(anyObject)
{
    console.log(`user name is ${anyObject.username} and age is ${anyObject.age}`);
}
handleObject(user)
handleObject({
    username:"Sam",
    age:23
})

//Functions with arrays

const arr=[200,400,100,600]
function returnSecondValue(getArray)
{
    return getArray[1]
} 

console.log(returnSecondValue(arr))
console.log(returnSecondValue([1,2,3,4,5,]))
