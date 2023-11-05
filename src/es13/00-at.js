//ECMA 13 - At - Recibe un valor numerico y devuelve el elemento en esa posicion
const array = ['one', 'two', 'three', 'four', 'five', 'six']
console.log(array.length(-1));  // Anteriormente esta era la manera de llegar al ultimo elemento sin conocer su longitud
console.log(array.at(-1));  // Los valores negativos empiezan a contar desde el ultimo elemento del array 
// Mayormente usado en APIs donde no sabemos su tamaño