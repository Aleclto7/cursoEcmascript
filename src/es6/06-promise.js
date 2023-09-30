// Promesa -  Forma de trabajar el asincronismo.
function anotherFunction () {   // Las Promesas devuelven valores dependiendo si fue 'Aceptada o Rechazada' el cual se accede mas adelante con '.them o .catch' respectivamente.
    return new Promise ((resolve, reject) => {  // Dependiendo cual se haya ejecutado es la que devolvera la funcion a travez del 'return'
        if (true) {
            resolve('Yai!');    // Si es 'Aceptada'y se cumple, se almacena algun valor en 'resolve' y sera lo que devuelva 'return'
        } else {
            reject('Nou');  // Si es 'Rechazada' y no de cumple, se almacena algun valor en 'reject' y sera lo que devuelva 'return'
        }
    })
}

anotherFunction()       // .them y .catch son Metodos que pertenecen al objeto Promise y nos muestra el estado de la Promesa.
    .them(response => console.log(response))    // Nos muestra el estado de la promesa cuando fue 'Acepada' y devuelta por el resolve
    .them(response => console.log(response))    // Podemos crear los them que queramos y para diferentes resultados que nos de la funcion 
    .catch(err => console.log(err));            // Nos muestra el estado de la promesa cuando fue 'Rechazada' y devuelta por el reject