// Ampliamos el uso de var let y const

/*
Con VAR puedes resignar en cualquier momento
este forma parte del ambito global 
un error es que se sobreescriba
*/

var nombre = "Gonzalo";
nombre = "Juarez"; //se puede cambiar a otros tipos de variables
console.log(nombre);

function saludar(){
    var nombre = "Ariel";
    console.log(nombre);
}
console.log(nombre); // aca no lee el dato de la función


if(true){
    var edad = 22;
    console.log(edad);
}
console.log(edad); 
// En la funcion funcionó correctamente y en la estructura IF falló
// ese valor solo deberia estar si la condición se cumple



/*
con LET puedes reasignar en cualquier momento
la diferencia es que su ámbito es de bloque,
solo disponible dentro de un bloque de llaves
o dentro de una función
*/

function saludar2(){
    let nombre2 = "Gonzalo";
    console.log(nombre2);
}
//console.log(nombre2);

if(true){
    let edad2 = 23;
    console.log(edad2);
}
//console.log(edad2);



/*
CONST se utiliza para valores constantes que no pueden ser reasignados
*/

const fechaNacimiento = 2000;
console.log(fechaNacimiento);
//fechaNacimiento = 2020;
//console.log(fechaNacimiento);