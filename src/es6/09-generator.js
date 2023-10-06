// Generadores - Alternativa Iterador personalizado. Proceso que puede pausarce, reanudarse y producir varios valores.
function* iterate(array) {     // '*' Para especificar que esa funcion sera de tipo 'generator'
    for (let value of array) {
        yield value;    // 'yield' permite pausar una funcion generadora y muestra el valor que le sigue a yield
    }
}
// EL objeto generator mostrado por la funcion es un iterador, este tiene un metodo next() utilizado para iterar una secuencia de valores.
const it = iterate(['Gerald', 'Cirila', 'Sintra', 'Jaskier', 'Yennifer']); // El generator devolvera un objeto que se puede almacenar en una variable
console.log(it.next().value); // Invocando next en el generator y obtendremos el valor y el estado actual del iterador
console.log(it.next().value); // Al usar yield (que pausa la funcion en cada valor), el sigueinte next nos mostrara el valor sigueinte
console.log(it.next().value); // Asi con cada valor que devuelva la funcion hasta que llegue al ultimo