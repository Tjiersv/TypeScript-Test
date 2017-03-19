//Ejemplo 1
let funcion = function(a){
  return a
}

let funcionArrow = a => a

//Ejemplo 2
let funcion2 = function (a:number, b:number) {
  return a + b
}

let funcionArrow2 = (a:number, b:number ) => a + b

//Ejemplo 3
//*Se puede hacer en menos lineas de codigo pero es para mostrar
//el caso de una funcion con una gran cantidad de codigo
let funcion3 = function (nombre: string){
  nombre = nombre.toUpperCase()
  return nombre
}

let funcionArrow3 = (nombre:string) => {
  nombre = nombre.toUpperCase()
  return nombre
}

//Ejemplo 4
let nombre = "pedro"

let hulk = {
  nombre : "hulk",
  smash(){
    /*setTimeout(funcion(){
      console.log(this.nombre + "smash!!!")
    }, 1500);*/
    setTimeout(()=> console.log(this.nombre + "smash!!!"),1500);
  }
}

hulk.smash();
