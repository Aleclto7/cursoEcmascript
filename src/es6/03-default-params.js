// Parametros por defecto.  Valores que tomaran nuestras funciones en caso de no pasarle ninguno
function newUser (name, age, country) {
    var name = name || 'Alexis';    // Se utiliza condicional 'or' para ponerle parametro por defecto
    var age = age || 23;
    var country = country || 'VE';

    console.log(name, age, country);
}
newUser();
newUser('Azul', 18, 'AR');

function newAdmin (name = 'Alexis', age = 23, country = 'VE') { // Menos codigo y mas amigable
    console.log(name, age, country);
}
newAdmin();
newAdmin('Azul', 18, 'AR');
