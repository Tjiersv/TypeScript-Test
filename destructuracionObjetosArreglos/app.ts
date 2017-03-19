//Ejemplo 1 Objeto
let avenger = {
  nombre : "Steve",
  clave : "Capitán America",
  poder : "Super Droga"
}

let {poder, clave, nombre} = avenger

console.log(nombre, clave, poder);

//Ejemplo2 Arreglo
let avengers:string[] = ["Thor", "Capitán", "Ironman"]

let [thor, steve, tony] = avengers
//let [,,tony]
console.log(thor, steve, tony)
console.log(tony);
