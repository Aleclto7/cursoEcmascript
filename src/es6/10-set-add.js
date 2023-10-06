// Las Estructuras de datos predominantes son Objects y Arrays. ECMA 6 introdujo 2 nuevos tipos de objetos iterables: Map (ordenan por pares clave-valor, parecido a Object) y Set (lista valores unicos, parecido a Array)
const list = new Set(); // Indicamos que 'list' sera una lista 'Set'

list.add('Item 1')  // '.add' permite agregar items a la lista set
list.add('Item 2').add('Item 3')    // Se puede encadenar varios add
console.log(list);