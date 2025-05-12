
// FUNCIÓN CLÁSICA
function miFuncion(){
    console.log("Saludos desde la función clásica");
}
miFuncion();

// FUNCIÓN ANÓNIMA
let miFuncionAnonima = function(){
    console.log("Saludos desde la función anónima");
}
miFuncionAnonima();
// FUNCIÓN FLECHA
let miFuncionFlecha = () => {
    console.log("Saludos desde la función flecha")
}
miFuncionFlecha();

// Varieantes de funcion flecha:
// en una misma línea
const saludar = () => console.log("Saludos a todos desde la función fecla en una misma línea")
saludar();

// usando return
const saludar2 = () => {
    return 'Saludos desde la funcion flecha con return'
}
console.log(saludar2());

// simplificar la funcion con return
const saludar3 = () => 'Saludos desde la funcion flecha 3';
console.log(saludar3);

// con objetos
const regresaObjeto = () => ({nombre: "Juan", apellido: 'Perez'});
console.log(regresaObjeto());

// con parámetros
const funcionParametros = (mensaje) => console.log(mensaje);
funcionParametros('Saludos desde la función flecha con parámetros')


// Funcion clasica con parametros
const funcionParametrosClasica = function(mensaje){
    console.log(mensaje);
}
funcionParametrosClasica('Saludos desde la función Clásica con parámetros')

// en función flecha se pueden omitir los paréntesis
const funcionSinParentesis = mensaje => console.log(mensaje);
funcionSinParentesis('Saludos desde la función flecha con parámetros sin paréntesis');

// Función flecha con varios parámetros
const funcionParametros2 = (op1, op2) => {
    let resultado = op1 + op2;
    return resultado;
}
console.log(funcionParametros2(3,2));3

