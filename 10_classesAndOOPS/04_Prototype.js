let myName="Sachin     "
console.log(myName.length); //Ab ye length wali property hme by default milti . 
//Goal: We want to add a method to give true length i.e without extra space

let myHeros=['Thor','Spiderman']
let heroPower={
    thor:"Hammer",
    spiderman:"Sling",
    getSpiderPower: function(){
        console.log(`Spiderman power is: ${this.spiderman}`);
    }
}

//Ab maano hme ek fn dena h protoype mein. for ex: sachin(): two ways: 1) myHeros.prototype.sachin
        //2) hum object k  prototype m hi ye method defined krr de. Is case m ye method sab objects  m aajayega


//way1: ye fn bas array m hoga
Array.prototype.durga=function(){
    console.log('Hello from Dev');
}
//Ye fn bass heroPower m hi hoga
myHeros.durga()
// heroPower.durga()  => ye line error degi as myHero dont have a fn named durga

//Way 2
Object.prototype.sachin=function(){
    console.log('Hello from Sachin');
}
//ab ye sachin fn sab m hoga: array, object, string
myHeros.sachin()
heroPower.sachin()


//Inheritance

const User={
name:"Chai",
email:"chai@tea.com"
}

const Teacher={
    makeVideo:true
}

const teachingSupport={
    isavailable:false
};

const TAsupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto_:teachingSupport//this line include teaching support in prototype of TAsupport: this is one way by writing inside
                        //Yhi inheritance h
}

//secondway : by writing outside

Teacher.__proto_=User

//These two ways are older and not used

//Moder synatx of protoypal inheritance
Object.setPrototypeOf(teachingSupport,Teacher)//(jisko inherit krna h, jisse krna h)//second wala parent h, first wala child


//Now completing our goal of defined at starting: creating a method: trulength

let anotherUserName="singhsachin    "
String.prototype.truelength=function(){
    console.log(this);
    console.log(this.name);//ye undefined dega :as string dont have defined a property "name"
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.truelength()
"Sachin   ".truelength()

