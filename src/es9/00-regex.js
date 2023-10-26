// ECMA9 - Regex (RegularExpresions) - Son Patrones de busqueda y manipulacion de cadena de caracteres increiblemente potentes.
const regex = /(\d{4})-(\d{2})-(\d{2})/;    //\d{4} -> busca un string con exactamente 4 dígitos de longitud luego viene un guión
const matchers = regex.exec('2022-01-01'); // Por lo que la primera expresion de regex tomara "2022" por cumplir con las especificaciones.
console.table(matchers);