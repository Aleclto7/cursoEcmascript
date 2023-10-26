// ECMA9 - Spread - Sirve para crear un nuevo objeto a partir de otros.
const user = {username: 'Aleclto7', age: 23, country: 'CO'}
const {username, ...values } = user;    // Al haber sacado 'username' toma '...' para los valores restantes y en este caso los guarda dentro de 'values' 
console.log(username);
console.log(values);