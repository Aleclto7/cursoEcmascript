//ECMA12 - Metodos Privados - Hacer que los metodos solo puedan ser accedidos desde la misma clase
class user {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Metodos
    #speak() {
        return 'Hello';
    }
    greating() {
        return `${this.speak} ${this.name}!`
    }
    // Setters y Getters
    get #uAge() {    
        return this.age;
    }
    set #uAge(n) {   
        this.age = n;
    }
}
const bebeloper1 = new user ('Eduardo', 15);
console.log(bebeloper1.uAge);   
console.log(bebeloper1.uAge = 20);