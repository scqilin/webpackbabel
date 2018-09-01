import printMe from './print.js' 
printMe()

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    speak(){
        console.log(`My name is${this.name},age ${this.age}.`)
    }
}
let li = new Person('李寻欢',21)
li.speak()
