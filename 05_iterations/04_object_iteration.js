//iterating object through for in loop
//Note: for of m value aati h ierator m and for in m key aati h iterator m, usse value access krni pdti h
const myObject={
    js:"javaScript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift"
}

for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}

const arr=['JS',"Ruby","CPP"]
for (const key in arr) {
    console.log(`${key}:${arr[key]}`);
}



//we cant iterate in map in this way by using forin loop

// const myMap=new Map()
// myMap.set("IN","India")
// myMap.set("US","America")
// myMap.set("CN","China")
// for (const key in myMap) {
//     console.log(key);
// }

/*

Note: array and map k upar for of loop and objects k upar for in loop
for of loop gives value in iterator and for in loop gives key in iterator
*/