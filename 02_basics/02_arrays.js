const marvelHeros=["Thor","IronMan","Spiderman"]
const dc_heros=["Superman","Flash","Aquaman"]

//marvelHeros.push(dc_heros)//array as an element add ho jata h
console.log(marvelHeros);

const allHeros=marvelHeros.concat(dc_heros)//ye ek new array return krta h
console.log(allHeros);

//Another way to concat two or more arrays using spread operator
const all_new_heros=[...marvelHeros,...dc_heros]
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_another_array=another_array.flat(Infinity)//ye 2d or 3d array ko 1d m krr dega. Bracket m depth deni h
                                                        //Infinity depth dene se wo saari depth tak use flat krr dega
console.log(usable_another_array);

console.log(Array.isArray("Sachin"));//to check is array or not
console.log(Array.from("Sachin"));//to convert to array
console.log(Array.from({name:"Sachin"}));//converting object to arrray gives empty array. Because we have to 
                                        //define whether to make keys into array or values into array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
