var nombre = "Gonzalo";
var apellido = "Juarez";
var nombreCompleto = nombre +" "+ apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Gonzalo" + " " + "Juarez";
console.log(nombreCompleto2);

var juntos = nombre + 219; // lee de izq a der (string) y prioriza paréntesis
console.log(juntos);
juntos = nombre + 78 + 17;
console.log(juntos);
juntos = nombre + (78 + 17);
console.log(juntos);
juntos = 78 + 17 + nombre;
console.log(juntos);

nombre += " " + apellido; // otra forma de concatenar
console.log(nombre);

// En la actualidad se utiliza let y const
let nombre2 = "Ariel";
console.log(nombre2);

const apellido2 = "Gomez"; // una constante no puede ser modificada
console.log(apellido2);

let x, y; // Se puede crear varias variables en una misma linea
x = 17, y = 21; //Se puede asignar valor a varias variables en una misma linea
let z = x + y;
console.log(z); //38

