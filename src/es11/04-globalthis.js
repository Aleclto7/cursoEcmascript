// ECMA11 - Global - provee funciones propias de cada lenguaje o entorno, su nombre varia dependiendo de la plataforma. 'GlobalThis' Se creo para estandarizarlos y este puede ser usado en cualquier plataforma
console.log(window);    // Es el nombre que recibe en el navegador.
console.log(global);    // Es el nombre que recibe en Node.
console.log(self);      // Es el nombre que recibe en WebWorked.
console.log(globalThis);// Devuelve la info segun el contexto donde este siendo utilizado