// ECMA10 - fromEntries - Ahora tambien permite convertir un Arrays de Arrays en Objetos.
const entries = new Map([['name', 'Alexis'], ['age', 23]]);
console.log(entries);
console.log(Object.fromEntries(entries));