var Avenger = (function () {
    function Avenger(nombre, equipo, nombre_real) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombre_real = nombre_real;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "Team-Cap", "Scott Lang");
console.log(antman);
