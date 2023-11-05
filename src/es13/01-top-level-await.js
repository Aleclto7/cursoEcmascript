// ECMA13 - Top Level Await - No necesita hacer una funcion que nos de el resolve del products en el Modulo
import { products } from './products.js'    // Importamos el resultado del modulo en la siguiente direccion

console.log(products);  // Imprimimos los productos, al tener el Await tardara un poco hasta que el servidor responda
console.log('Hey!');    // Luego se imprimira el 'Hey'