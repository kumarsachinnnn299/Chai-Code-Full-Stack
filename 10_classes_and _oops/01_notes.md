# Javascript and Classes
JavaScript is primarily a prototype-based language and not object oriented language.

Yes, JavaScript has a concept called "classes" introduced in ECMAScript 2015 (ES6). However, it's important to note that JavaScript's classes are syntactic sugar over the existing prototype-based inheritance system, and they do not provide a new object-oriented model like classes in some other programming languages.

JavaScript's class syntax makes it easier to work with prototypes and constructor functions, providing a more familiar syntax for developers who come from class-based languages. Here's an example of using classes in JavaScript:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy');
dog.speak(); // Output: Buddy barks.
```

In the example above, `Animal` is a base class, and `Dog` is a subclass that extends `Animal`. The `extends` keyword is used for inheritance. While this syntax makes it look like classical inheritance, it's important to understand that JavaScript's underlying mechanism is still prototype-based.

In summary, JavaScript has a class syntax that provides a more convenient way to work with prototypes and constructor functions, but it does not introduce traditional class-based inheritance.

## OOP

## Object
* Collection of properties and methods 
* Example: toLowerCase

## Why Object oriented programming introduced in JS?
To make the code less messy

## Parts of OOP
* Object literal i.e "{ }"
* Constructor function
* Prototypes
* Classes
* Instance(new,this)