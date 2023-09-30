// Enahced object literals

function newUser (user, age, country, uId) { // Al crear un objeto con los parametros de la funcion
    return {
        user,       // Al tener mismo nombre podemos usarlas diretamente, sin asignarle un valor
        age,        // y ES6 tomara el valor del parametro con el mismo nombre
        country,
        id: uId     // tradicionalmente se pasan de esta menera, variable y su contenido
    };
}
console.log(newUser('Alexis7', 23, 'VE', 1));

