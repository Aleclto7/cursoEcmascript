// ECMA10 - Try and Catch - permite manejar errores de tiempo de ejecución. Literalmente permite intentar (try) ejecutar el código y “atrapar (catch)” errores que pueden ocurrir en él.
try {
    hello();
} catch (error) { // Antes esta era la sintaxis para cuando entrara en catch por causa de un error
    console.log(error);
}
try {
    anotherFun();
} catch { // Ahora podemos colocar un mensaje o alguna logica para cuando entre en un catch
    console.log('Esto es un error');
}