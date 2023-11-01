//ECMA11 - MatchAll - Devuelve un iterable con todas las coincidencias de un string especifico a partir de la expresion regular
const regex = /\b(Apple)+\b/g;
const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

for (const match of fruit.matchAll(regex)) {    // Usamos el metodo 'MatchAll' y el metodo 'regex' o la regla que va a seguir para buscar
    console.log(match); // Los resultados se almacenaran el match y lo imprimiremos en consola
}