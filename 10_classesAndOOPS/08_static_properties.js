//Properties ko hi short m props bolte h

class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }


    static createdId(){//Ye static keyword basically ye krta h k is is class se instantiate hue object ya fir isse inherited
        //  koi class ho uska object bhi us static element ko acces nhi krr skte
        return `123`
    }
}

const sachin=new User("Sachin")
// console.log(sachin.createdId())   => after writing static, this line will give error

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const teacher=new Teacher("Sachin Sir", "sir@icall.com")
teacher.logMe();
// console.log(teacher.createdId()); => ye code bhi error dega as static elements are not accessible to object of child class also
