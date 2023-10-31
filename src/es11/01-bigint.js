// ECMA11 - BigInt - Ayuda a manejar numeros de gran tamaño. 
const aBigNumber = 309377309235134903n;    // Antes teniamos 'n' para menejar y saber que trabajamos estos numeros
const anotherBN = BigInt(309377309235134903);   // Al enviar parametro de tipo entero (que tiene maximo representable) 
console.log(aBigNumber);
console.log(anotherBN);  // 'BigInt' recibira el numero acortado que pueda ser representable con JS.
// La solucion para esto e pasarlo como string y 'BigInt' se encargara de convertirlo a tipo number