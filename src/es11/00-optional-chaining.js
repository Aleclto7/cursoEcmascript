//ECMA11 - OptionalChaining - Permite validar si el parametro de un objeto existe o no. en caso de undefined o null este no detiene el flujo del codigo.
const users = {
    alexis: {
        country: 'Vzla'
    },
    azul: {
        country: 'AR'
    }
} 
console.log(users.alexis.country);  // Encadenando elementos podemos acceder a uno en especifico
console.log(users?.feli?.country);  // '?' es como se representa el optional chaining. Recomendable usar úncamente cuando probablemente un valor no exista para evitar ocultar errores.