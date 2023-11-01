// ECMA11 - Promise AllSettled - Devuelve una promesa que se cumple despues que todas las promesas dadas se hayan cumplido o rechazado.
const promise1 = new Promise ((resolve, reject) => reject('Reject'))
const promise2 = new Promise ((resolve, reject) => resolve('resolve'))
const promise3 = new Promise ((resolve, reject) => resolve('Resolve 2'))

Promise.allSettled([promise1, promise2, promise3])  // Recibe un iterable de promesas con el cual
    .then(response => console.log(response));   // Devuelve una matriz de objetos que describe el resultado de cada promesa