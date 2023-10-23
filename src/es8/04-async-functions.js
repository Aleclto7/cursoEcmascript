// Funciones Asincronas - Permite aislar su flujo para que no intervenga en el externo. Logrando ejecutar varios procesos en simultaneo y que el codigo no se detenga se esta falla.
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)  // Forma de utilizar 'if' con el concepto terniario
            ? setTimeout(() => resolve ('AsynC!!'), 3000)   //  '?' Donde vamos a pasar la sentencia verdadera
            : reject(new Error('Error!'));  // ':' Hace referencia al 'else' donde pasaremos el codigo que se ejecutara si '?' no se cumple
    });
}

const anotherFn = async () => { // 'async' indica que una funcion siempre devolvera una promesa
    const some = await fnAsync();   // 'await' existe dentro de function 'async'. Hace JS esperar hasta que la funcion promesa responda para continual el codigo dentro de la funcion, Pero sin detener el flujo externo.
    console.log(some);  // Llama a 'fnAsync' y como tiene un 'setTimeout' sigue con el flujo hasta que el tiempo se cumpla
    console.log('Hello!');  // Se ejecuta despues que 'some' ya que esta dentro del flujo que queda pausado en segundo plano
}

console.log('Before');  // Se imprime en consola por flujo normal del codigo
anotherFn();    // Llama a la funcion que contiene el setTimeout por lo que no imprime nada hasta llegado el tiempo
console.log('After');   // Se imprime en consolas