// flat - Permite aplanar los elementos de un array, eliminando arrays internos.
const array = [1, 2, 3, 4, 5, [2, 3, 4, 5, [6, 7, 8]]];
console.log(array.flat(3));

// flatMap - Permite aplanar los elementos de un array en un nivel, pasando una funcion que mapea cada elemento.
const arrayMap = [1, 2, 3, 4, 5];
console.log(arrayMap.flatMap(v => [v, v * 2]));