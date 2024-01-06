

//Study: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
/*

it return a single value

The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element 
of the array, in order, passing in the return value from the calculation on the preceding element. The final 
result of running the reducer across all elements of the array is a single value.
*/

const mynums=[1,2,3,4,5]
const initialvalue=1;
//Using arrow fn and initial value
const reducerresult=mynums.reduce((accumulator,curr)=>accumulator+curr,initialvalue);
console.log(reducerresult);

//using normal fn and initial value
const reducerresult2=mynums.reduce(function(accumulator,initialvalue){
    console.log(`Accumulator: ${accumulator}, initialvalue: ${initialvalue}`);
    return accumulator+initialvalue
},initialvalue)
console.log(reducerresult2);

//using arrow fn without initial value
const reducerresult3=mynums.reduce((accumulator,curr)=>accumulator+curr);//initial value n de to array k zeroth element ko initial value maan leta h
console.log(reducerresult3);

//using normal fn without initial value
const reducerresult4=mynums.reduce(function(accumulator,initialvalue){
    console.log(`Accumulator: ${accumulator}, initialvalue: ${initialvalue}`);
    return accumulator+initialvalue
})
console.log(reducerresult4);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);