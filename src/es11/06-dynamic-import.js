//ECMA11 - Dynamic Import - Permite manejar modulos dinamicamente. Llamar a ellos cuando se vayan a utilizar y no al iniciar la app. Haciendo la pagina mas rapida ya que tiene que cargar menos recursos
const button = document.getElementById('btn');

button.addEventListener('click', async function () {    // Creamos una funcion anonima que ejecutara el import
    const module = await import ('./module.js'); // El 'import' almanecara el resultado del modulo en la variable.
    console.log(module);    // Que despues sera ejecutada en consola
    module.hello();
})