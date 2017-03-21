interface Xmen {
  nombre:string,
  poder:string
}

function enviarMision(xmen:Xmen) {
    console.log(`Enviando a ${xmen} a la misión`)
}

function enviarCuartel(xmen:Xmen) {
  console.log(`Enviando a ${xmen} al cuartel`)
}

let wolverine = {
  nombre: "Wolverine",
  poder: "Super Garras"
}

let gambito = {
  nombreXmen: "Gambito",
  poder: "Super Cartas"
}

enviarMision(wolverine)
enviarCuartel(wolverine)

//Error, por que el objeto no está construdio de la misma forma que la interfaz
//enviarMision(gambito)
//enviarCuartel(gambito)
