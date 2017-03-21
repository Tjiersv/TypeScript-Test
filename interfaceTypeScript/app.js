function enviarMision(xmen) {
    console.log("Enviando a " + xmen + " a la misi\u00F3n");
}
function enviarCuartel(xmen) {
    console.log("Enviando a " + xmen + " al cuartel");
}
var wolverine = {
    nombre: "Wolverine",
    poder: "Super Garras"
};
var gambito = {
    nombreXmen: "Gambito",
    poder: "Super Cartas"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
//Error, por que el objeto no está construdio de la misma forma que la interfaz
//enviarMision(gambito)
//enviarCuartel(gambito)
