async function* anotherGenerator () {   // 'async' Indica que una funcion siempre devolvera una promesa
    yield await Promise.resolve(1); // 'await' Hace a JS parar hasta que la funcion promesa responda pero sin detener el flujo externo
    yield await Promise.resolve(2); // 'Yield' pausa la funcion y muestra el valor que le sigue 
    yield await Promise.resolve(3); // Se crea una promesa pero sin validacion, directmente que retorne un valor a travez del resolve
}
const other = anotherGenerator();
other.next().then(response => console.log(response.value))  // '.next' trae el valor del estado actual de la funcion en este caso
other.next().then(response => console.log(response.value))  // '.then' trae el valor que devuelve la promesa a travez del resolve
other.next().then(response => console.log(response.value))  // '.value' trae el valor del resolve, ya que originalmente viene un objeto
console.log('Hello');   // Se ejecuta primero ya que 'anotherGenerator' es una funcion asincrona, detiene el flujo dentro pero no el externo.

async function arrayOfNames (array) {   // La funcionalidad de iterar tambien fue agregada para los for
    for await (let value of array) {
        console.log(value);
    }
}
const names = arrayOfNames(['Alexis', 'Azul', 'Burbuja']);
console.log('After');