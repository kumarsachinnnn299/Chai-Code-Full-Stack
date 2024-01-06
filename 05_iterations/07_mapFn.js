const numbers=[11,22,31,41,56,61,73]
const newNumbers=numbers.map((item)=> item*10)
console.log(newNumbers);

//Chaining: we can use multiple map or filters or combo of both
const Chainingresult=numbers.map((num)=>num+1).map((num)=>num*10)
const Chainingresult2=numbers.map((num)=>num+1).map((num)=>num*10).filter((item)=>item>300)
console.log(Chainingresult);
console.log(Chainingresult2);
