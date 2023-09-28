var lastname = 'Alexis'     // Declarar y asignar una variable
lastname = 'Eduardo'        // Reasignar una variable
console.log(lastname);

let fruit = 'Apple';
fruit = 'Kiwi'              // let tambien permite reasignar
console.log(fruit);

const animal = "Dog";
animal = "Cat";             // const no permite reasignar 
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = "Apple"    // Function scope - Se puede acceder de manera global
        let fruit2 = 'Kiwi'     // Function block - Se Accede dentro del bloque donde fue declarada
        const fruit3 = 'Banana' // Function block 
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
} 
fruits();