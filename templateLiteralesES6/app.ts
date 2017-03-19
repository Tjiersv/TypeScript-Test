function getNombre() {
    return "Fernando"
}

let nombre:string = "Jose"
let apellido:string = "gonzales"
let edad:number = 28

let texto_uno = "Hola, "+nombre+" "+apellido+" ("+edad+")"
let texto_dos = `Hola, ${nombre} ${apellido} (${edad})`
let texto_tres = `${getNombre()}`

console.log(texto_uno)
console.log(texto_dos)
console.log(texto_tres)
