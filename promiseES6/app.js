var promesa1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa Terminada");
        //Termina Bien
        resolve();
        //termina Mal
        //reject()
    }, 1500);
});
console.log("Paso1");
promesa1.then(function () {
    console.log("Ejercutame cuando termine bien!");
}, function () {
    console.log("Ejecutame cuando termine mal");
});
console.log("Paso2");
