class Avenger {

  nombre:string
  equipo:string
  nombre_real:string
  puede_pelear:boolean
  peleas_ganadas:number

  constructor(nombre:string, equipo:string, nombre_real:string){
      this.nombre = nombre
      this.equipo = equipo
      this.nombre_real = nombre_real
  }

}

let antman:Avenger = new Avenger("Antman", "Team-Cap", "Scott Lang")
console.log(antman)
