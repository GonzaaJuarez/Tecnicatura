
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


// Evitar repetir tu código
// Dry don't repeat yourself

let days = 'Lunes';

switch(days){
    case 'Lunes': 
        console.log('Hoy es ' + days);
        break;
    case 'Martes':
        console.log('Hoy es ' + days);
        break;
    case 'Miércoles':
        console.log('Hoy es ' + days);
        break;
    case 'Jueves':
        console.log('Hoy es ' + days);
        break;
    case 'Viernes':
        console.log('Hoy es ' + days);
        break;
    case 'Sábado':
        console.log('Hoy es ' + days);
        break;
    case 'Domingo':
        console.log('Hoy es ' + days);
        break;
    default:
        console.log('Error al ingresar el día de semana');
        break;
}

    //Opciión mejorada

let days2 = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

function getDay(n){
    if(n < 1 || n > 7){
        throw new Error('Out of range');
    }
    return days2[n-1];
}
console.log(getDay(5));