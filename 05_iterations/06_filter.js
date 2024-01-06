const coding=["JS","Ruby","JAVA","C++"]

//for each here doesnt return anything
const response=coding.forEach((item)=>{
    console.log(item);
    return item
})

//filter
/*
    also have same syntax as foreach and accept a call back fn
    //it return value
*/
const myNums=[1,2,3,4,5,67,8,9]
//implicit return
const res=myNums.filter((num)=>num>4)
console.log(res);

//with return keyword or explicit return
const res2=myNums.filter((num)=>
{
    return num>4
})
console.log(res2);


//To get values through foreach loop
const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks1 = books.filter( (bk) => bk.genre === 'History');

  let userBooks2 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log("By implicit return: ",userBooks1);
  console.log("By Explicit return: ",userBooks2);


