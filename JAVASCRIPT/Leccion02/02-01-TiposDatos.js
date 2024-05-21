//Tipos de datos en JavaScript

var nombre = "Gonzalo"; // Tipo str
console.log(nombre)
nombre = 7;
console.log(nombre);
nombre = 12.3
console.log(nombre)

var numero = 3000; // Tipo numérico
console.log(numero) 

var objeto ={
    nombre : "Gonzalo",
    apellido : "Juarez",
    telefono : "2625402555"
}   // Tipo objeto
console.log(objeto);

//Tipo booleano
var bandera = true;
console.log(bandera);

//Funciones (Reutilizar lineas de código)
function miFuncion(){}
console.log(miFuncion);

//tipo symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);

//Tipo clase
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

// Tipo Undefined (variable sin definir)
var x;
console.log(x);
x = undefined;
console.log(x);

// Null (ausencia de valor)
var y = null; //null no es un tipo de dato, pero su origen es tipo object
console.log(y);

// Tipo Array y Empty String
var autos = ["Peugueot, BMW, Chevrolet, Audi, Ford"]; //array
console.log(autos);

var z = ''; //cadena vacía (empty string)
console.log(z);
