//Syntax

/*
 switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month=1;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Februaru");
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("Other month of year");
        break;
}
//Break na ho to jha match hoga uske baad ki saare cases ko run krta h : isi ko "fallthrough" kehte h