//Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
/*The Array object, as with arrays in other programming languages, enables storing a collection of multiple 
items under a single variable name, and has members for performing common array operations. */

// const myArray=[0,1,2,3,true,"Sachin"]
const arr1=[0,1,2,3,4,5]
// const arr2=["Sachin","Kumar","Singh"]
// const arr3=new Array(1,2,3,4)
console.log(arr1[0]);

//Arrays methods
arr1.push(6)
console.log(arr1);

arr1.pop()
console.log(arr1);

arr1.unshift(5)//to insert at begining of array: problem ye h ki isme array ki saari value aage shift hongi
console.log(arr1);

arr1.shift()
console.log(arr1);//to pop from beginning

console.log(arr1.includes(9));//to check 9 is present or not

console.log(arr1.indexOf(9));

const myarr=arr1.join()
console.log(myarr);
console.log(typeof myarr,'\n');

//Slice and splice

//Slice: slice elements between a range except last index
console.log("A ",arr1);
const myarr1=arr1.slice(1,3)
console.log((myarr1));
console.log("B ",arr1,'\n');

//Splice: slice elements from a start point  i.e arr.slice(startIdx,totalElementsToSlice) and original array se nikal deta h
console.log("A ",arr1);
const myarr2=arr1.splice(1,3)
console.log((myarr2));
console.log("C ",arr1);