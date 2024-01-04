"use strict";//treat all JS code as newer version : although ab ye likhne ki jrurat nhi pdti ab by default yhi hota h

// alert(3+3) // Will not work as we are using node.js and not browser
let name="Sachin"
let age=19
let isLoggedIn=false

/*
Other datatype:
A) Primitive:
    1) number: range is 2 to power 53
    2) bigint
    3) string = "" or '' but prefer ""
    4) boolean => true or false
    5) null-> it is a standalone value itself
    6) undefined

    Q)difference between null and undefined:
    Ans: undefined represents when we haven't defined the value of a varialbe ir we only have declared a 
    variable but not defined its value. But null represents empty value

    7) symbol: used in react. Used to find uniqueness of components

b) Objects


*/

console.log(typeof "Sachin")
console.log(typeof null)//object
console.log(typeof undefined)//undefined