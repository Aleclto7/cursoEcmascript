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