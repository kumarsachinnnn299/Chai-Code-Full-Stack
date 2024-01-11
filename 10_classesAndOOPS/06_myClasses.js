class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new User("chai","chai@tea.com","password")
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

//Behind the scene kese kaam ho rha h: if class n hoti

/*

function  User(username,email,password){
        this.username=username
        this.email=email
        this.password=password
}

User.prototype.encryptPassword=function name() {
    return `${this.password}abc`
}

User.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}

// use same tareeke se krtw
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

*/

//Upar wale ko comment krke dekhna. Upar wale code ka backend m aese hi ho rha h. Both are same. It just that way of writing is diff
//Class bas ek syntactic sugar hi h nothing different

