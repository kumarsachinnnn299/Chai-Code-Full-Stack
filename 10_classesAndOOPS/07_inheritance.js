class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

//Inheritance
class Teacher extends User{
    constructor(username,email,password){
        super(username)//ab ye backend m aese hi kaam krega ki ye this.username le jayega. mtlab current execution
        // context ka reference le jayega parent class m and uska username set krr dega
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const obj=new Teacher("Sachin","sachin@google.com","password@123")
obj.addCourse()
obj.logMe()

const msalaChai=new User("masalachai")//iske pass addcourse fn ka access nhi hoga
msalaChai.logMe()

console.log(obj===msalaChai);
console.log(obj===Teacher);
console.log(obj instanceof Teacher);
console.log(obj instanceof User);
