// Funciones de tipo flecha / funciones flecha o Arrow Functions
// Alternativa a una funcion con una forma mas amigable de trabajar y una sintaxis mas entendible

function square (num) {     // Forma con la funcion normal
    return num * num;
}

const square = (num) => {   // Se puede utilizar let var const, pero al ser una funcion se recomienda const
    return num * num;
}

const square = num => num * num; // Con solo un argumento podemos dejar de lado los parentesis, las llaves y el return. 