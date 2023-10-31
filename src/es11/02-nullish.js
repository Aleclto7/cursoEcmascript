// ECMA11 - NullIsh - Valida si el valor existe o vienen en formato 'null', en ese caso podemos asignarle algun valor
const anotherNumber = null; // En el caso de tener un valor sera pasado en la validacion
const validate = anotherNumber ?? 5; // En caso que sea null tomara el valor que se ligue a los '??'
console.log(validate);