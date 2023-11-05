// ECMA12 - Promise Any - Captura la respuesta de la primera promesa que se ejecute de manera satisfactoria.
const promise1 = new Promise ((resolve, reject) => reject('Reject'))
const promise2 = new Promise ((resolve, reject) => resolve('resolve'))
const promise3 = new Promise ((resolve, reject) => resolve('Resolve 2'))

Promise.any([promise1, promise2, promise3]) // Captura la respuesta de la primera promesa que se ejecute de manera satisfactoria.
    .then(response => console.log(response));   // Si es reject la ignora y devuelve el primer resolve