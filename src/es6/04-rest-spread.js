// Arrays Destructuring
let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;                 // De esta manera podemos destruscutar elementos (sacar a 'a y b' del array) y usarlos.
console.log(a,b);
console.log(fruits[a],fruits[b]);   // Manera de acceder a elementos de forma tradicional

// Object Destructuring
let user = {username: 'Alexis', age: 23};
let {username, age} = user;         // Destructuracion
console.log(username, age);
console.log(user.username, user.age);   // Manera tradicional

// Spread Operator
let person = {name:'Alexis', edad:23}   
let country = 'VE'

let data = {id: 1, ...person, country}  // '...' Permite asignar todos los valores de un elemento lista a uno nuevo sin tanto codigo 
console.log(data);

let colors = ['Yellow', 'Green']
let newColor = 'Red'
let newColors = [...colors, newColor]   // Tambien funciona con Arrays
console.log(newColors);

// Rest
function sum (num, ...values) {     // Utilizando '...' como parametro de funcion pasa todos los segundos parametros dentro de values
    console.log(values);            // Mostrandonos un array con esos valores dentro
    console.log(num + values[0]);
    return(num + values[0]);
}

sum(1, 1, 2, 3);