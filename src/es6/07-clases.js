class User { };   // Declarando una clase 
// const newUser = new User();  // Instancia de una clase. Instancia = Accion de crear un nuevo objeto basado en una clase en particular

class user {
    // Metodos = Funciones que pertenecen a un objeto. Permiten modificar y manipulas sus elementos. (Elementos posteriormente agregados)
    greating() {
        return 'Hello';
    }
};

const alexis7 = new user ();    // 'new' Crea una instancia de la clase 'user'. Se crea el objeto 'alexis7' y se almacena en la clase 'user' 
console.log(alexis7.greating());    // Accedemos al metodo 'greating' del objeto recien almacenado en la clase
const bebeloper = new user ();
console.log(bebeloper.greating());  

// Constructor
class user {
    constructor() { // Constructor = Metodo especial para crear e inicializar un objeto creado a partir de una clase
        console.log('Nuevo usuario'); // Cuando se cree una instancia se va a ejecutar/inicializar los elementos dentro del contructor
    }
    greating() {
        return 'Hello';
    }
}
const eduardo = new user ();

// This = Hace referencia al elemento padre que lo contiene. Al objeto con el que se esta trabajando
class user {
    constructor (name) {    // El constructor generalmente recibe los this como parametro
        this.name = name;   // 
    };
    // Metodos
    speak() {
        return 'Hello';
    };
    greating() {
        return `${this.speak()} ${this.name}!`; // 'this' hare referencia al elemento padre que lo contiene
    };
};
const ana = new user ('Ana');
console.log(ana.greating());

// setters getters
class user {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Metodos
    speak() {
        return 'Hello';
    }
    greating() {
        return `${this.speak} ${this.name}!`
    }
    // Setters y Getters
    get uAge() {    // 'Get' Permite acceder a leer al atributo de un objeto
        return this.age;
    }
    set uAge(n) {   // 'Set' Permite acceder y modificar el atributo de un objeto
        this.age = n;
    }
}
const bebeloper1 = new user ('Eduardo', 15);
console.log(bebeloper1.uAge);   // Accedemos al get que nos muestra el atributo
console.log(bebeloper1.uAge = 20);  // Al modificarlo accedemos al set que permite hacer el cambio
