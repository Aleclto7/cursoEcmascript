let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!'
console.log(epicPhrase);

// Template Literals
let epicPhrase2 = `${hello} ${world}!`; // Concatenar strings de manera mas practica y menos codigo
console.log(epicPhrase2);

// Multi-line strings
let lorem = 'Esto es un string \n' + 'Esto es otra linea';
let lorem2 = `Esto es una frase epica   
Esta es otra frase epica.`;     // Hacer saltos de linea de manera mas sencilla
console.log(lorem);
console.log(lorem2);