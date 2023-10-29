// 
function anotherFunction () {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve('Yai!');
        } else {
            reject('Nou');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finaly'));  // Permite tener una funcion anonima para hacer algo cuando haya terminado.