const User={
    _email:'s@singh.com',
    _password:'abc',
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value;
    },
    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password=value;
    }
}

//ye syntax bahut rare h
//Iska faayda ye h ki isme hum factory fn use krr skte h. For ex: Object.create
const tea=Object.create(User)
console.log(tea.email);
console.log(tea.password);
console.log(tea._email);
console.log(tea._password);