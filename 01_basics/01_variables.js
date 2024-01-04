const accountId=144553
let accountEmail="sachin@gmail.com"
var accountPassword="12345"
accountCity="Ghaziabad"//this will also act as global variable
let accountState       //it will get undefined as value
// accountId=2  -> not allowed
accountEmail="hac@gmail.com"
accountPassword="212121"
accountCity="Bengaluru"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
