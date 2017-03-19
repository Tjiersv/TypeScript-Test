//Ejemplo 1
var funcion = function (a) {
    return a;
};
var funcionArrow = function (a) { return a; };
//Ejemplo 2
var funcion2 = function (a, b) {
    return a + b;
};
var funcionArrow2 = function (a, b) { return a + b; };
//Ejemplo 3
//*Se puede hacer en menos lineas de codigo pero es para mostrar
//el caso de una funcion con una gran cantidad de codigo
var funcion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var funcionArrow3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//Ejemplo 4
var nombre = "pedro";
var hulk = {
    nombre: "hulk",
    smash: function () {
        var _this = this;
        /*setTimeout(funcion(){
          console.log(this.nombre + "smash!!!")
        }, 1500);*/
        setTimeout(function () { return console.log(_this.nombre + "smash!!!"); }, 1500);
    }
};
hulk.smash();
