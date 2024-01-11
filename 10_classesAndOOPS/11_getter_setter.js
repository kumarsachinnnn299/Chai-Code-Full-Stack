class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    //defining getter : us variable k naam se hi bnte h
    //Dono hi define krne pdege sath m, getter and setter

    get password(){
        return this._password.toUpperCase();//ye _password isliye likha h kyuki this.password seter and getter constructore
        //fn m bhi hue h and inse setter getter and constructor fn m race lg jaati h or bar bar calls hoti h
        //isse error aata h max stack calls reached. To isiliye hum _password likh k ek nyi property hi define krr dete h
        // "_" se kch nhi hota bas ye private variable ko darshata h 
    }

    //Ye _password ek private property ki tarah h. only accessible within the class

    set password(password){
        this._password=password.toUpperCase()
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(email){
        this._email=email
    }


    
}



const user=new User("Sahin@gmail.com","pass@13")
console.log(user.password);
console.log(user.email);