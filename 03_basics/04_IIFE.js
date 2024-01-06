//Immediately Invoked Function Expression (IIFE). Note: ye IIFE m dhyan se ; end m jrur lgaye to end context else give error
//Ye declaration k baad khud turant execute ho jayenge. And prevent pollution from global scope variables.  more study at this link
//https://developer.mozilla.org/en-US/docs/Glossary/IIFE
/*
    Syntax:
    (function () {
    // …
    })();

    (() => {
    // …
    })();

    (async () => {
    // …
    })();
*/

//Normal fn
function chai()
{
    console.log("DB Connected");
}
chai();

//IIFE: ye named iife h because here we have given name to fn. Aage unnamed iife h in case of arrow fn
(function chai2(){
    console.log("ChaiIIFE");
})();

//()()=> first parenthesis for fn definition, second for immediate exexution of this fn 

//IIFE of arrow fn
(()=>{
    console.log("IIFE of Arrow fn");
})();

//IIFE of arrow fn with arguments
((name)=>{
    console.log(`Hi ${name}, how are you?`);
})("Sachin");

